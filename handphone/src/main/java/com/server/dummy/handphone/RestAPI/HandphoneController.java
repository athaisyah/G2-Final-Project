package com.server.dummy.handphone.RestAPI;

import com.server.dummy.handphone.MVC.Model.HandphoneBillModel;
import com.server.dummy.handphone.MVC.Service.HandphoneBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/handphone")
public class HandphoneController {

    @Autowired
    HandphoneBillService hBillService;

    @RequestMapping(value = "/check", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String handphone(@RequestBody String handphones) {
        System.out.println(handphones);
        String[] temp = handphones.split("=", 0);
        String hp = temp[0];

        HandphoneBillModel hBillModel = new HandphoneBillModel();
        hBillModel.setNo_handphone(Long.parseLong(hp));

        List<HandphoneBillModel> handphoneBillModels = hBillService.checkBill(hBillModel);
        if(handphoneBillModels.size() > 0) {
            for(HandphoneBillModel hbm : handphoneBillModels) {
                String name = hbm.getName();
                String period = hbm.getPeriod();
                String amount = String.valueOf(hbm.getAmount());
                String status = hbm.getStatus();
                String provider = hbm.getProvider();

                return "{\"message\" : {" +
                        "\n\t\"Name\" : \"" + name + "\", " +
                        "\n\t\"Handphone\" : \"" + hp + "\", " +
                        "\n\t\"Provider\" : \"" + provider + "\", " +
                        "\n\t\"Period\" : \"" + period + "\", " +
                        "\n\t\"Amount\" : " + amount + ", " +
                        "\n\t\"Status\" : \"" + status + "\"\n}\n}";
            }
        }
        return "{\"message\" : \"Handphone Number " + hp + " not found\"\n}";
    }

    @RequestMapping(value = "/amount", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String handphoneAmount(@RequestBody String handphones) {
        System.out.println(handphones);
        String[] temp = handphones.split("=", 0);
        String hp = temp[0];

        HandphoneBillModel hBillModel = new HandphoneBillModel();
        hBillModel.setNo_handphone(Long.parseLong(hp));

        List<HandphoneBillModel> handphoneBillModels = hBillService.checkBill(hBillModel);
        if(handphoneBillModels.size() > 0) {
            for(HandphoneBillModel hbm : handphoneBillModels) {
                String amount = String.valueOf(hbm.getAmount());
                return amount;
            }
        }
        return "{\"message\" : \"Handphone Number " + hp + " not found\"\n}";
    }

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public String handphonePayment(@RequestBody String handphones) throws Exception {
        System.out.println(handphones);

        String[] temp = handphones.split("=", 0);
        String hp = temp[0];
        System.out.println(temp[0]);

        HandphoneBillModel hBillModel = new HandphoneBillModel();
        hBillModel.setNo_handphone(Long.parseLong(hp));
        int payment = hBillService.payment(hBillModel);

        if (payment != 0) {
            List<HandphoneBillModel> hblModel = hBillService.checkBill(hBillModel);
            for (HandphoneBillModel hbm : hblModel) {
                String name = hbm.getName();
                String period = hbm.getPeriod();
                String amount = String.valueOf(hbm.getAmount());
                String status = hbm.getStatus();
                String provider = hbm.getProvider();

                return "{\"message\" : \"Thanks for payment.\"," +
                        "\n\"messageDetail\" : {" +
                        "\n\t\"Name\" : \"" + name + "\", " +
                        "\n\t\"Handphone\" : \"" + hp + "\", " +
                        "\n\t\"Period\" : \"" + period + "\"," +
                        "\n\t\"Amount\" : " + amount + "," +
                        "\n\t\"Status\" : " + status + "," +
                        "\n\t\"Provider\" : \"" + provider +
                        "\"\n}\n}";
            }
        }
        return "{\"message\" : \"Handphone Number " + hp + " not found\"\n}";
    }


}
