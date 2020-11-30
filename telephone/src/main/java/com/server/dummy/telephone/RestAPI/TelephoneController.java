package com.server.dummy.telephone.RestAPI;

import com.server.dummy.telephone.MVC.Model.TelephoneBillModel;
import com.server.dummy.telephone.MVC.Service.TelephoneBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/telephone")
public class TelephoneController {

    @Autowired
    TelephoneBillService tBillService;

    @RequestMapping(value = "/check", method = RequestMethod.POST)
    public String telephone(@RequestBody String telephones) {
        System.out.println(telephones);
        String[] temp = telephones.split("[=]", 0);
        String tlp = temp[0];

        TelephoneBillModel tBillModel = new TelephoneBillModel();
        tBillModel.setNo_telephone(Integer.parseInt(tlp));

        List<TelephoneBillModel> telephoneBillModels = tBillService.checkBill(tBillModel);
        if(telephoneBillModels.size() > 0) {
            for(TelephoneBillModel tbm : telephoneBillModels) {
                String name = tbm.getName();
                String period = tbm.getPeriod();
                String amount = String.valueOf(tbm.getAmount());
                String status = tbm.getStatus();

                return "{\"message\" : {" +
                        "\n\t\"Name\" : \"" + name + "\", " +
                        "\n\t\"Telephone\" : \"" + tlp + "\", " +
                        "\n\t\"Period\" : \"" + period + "\", " +
                        "\n\t\"Amount\" : " + amount + ", " +
                        "\n\t\"Status\" : \"" + status + "\"\n}\n}";
            }
        }
        return "{\"message\" : \"Telephone Number " + tlp + " not found\"\n}";
    }

    @RequestMapping(value = "/amount", method = RequestMethod.POST)
    public String telephoneAmount(@RequestBody String telephones) {
        System.out.println(telephones);
        String[] temp = telephones.split("[=]", 0);
        String tlp = temp[0];

        TelephoneBillModel tBillModel = new TelephoneBillModel();
        tBillModel.setNo_telephone(Integer.parseInt(tlp));

        List<TelephoneBillModel> telephoneBillModels = tBillService.checkBill(tBillModel);
        if(telephoneBillModels.size() > 0) {
            for(TelephoneBillModel tbm : telephoneBillModels) {
                String amount = String.valueOf(tbm.getAmount());
                return amount;
            }
        }
        return "{\"message\" : \"Telephone Number " + tlp + " not found\"\n}";
    }

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public String telephonePayment(@RequestBody String telephones) throws Exception {
        System.out.println(telephones);

        String[] temp = telephones.split("=", 0);
        String tlp = temp[0];
        System.out.println(temp[0]);

        TelephoneBillModel tBillModel = new TelephoneBillModel();
        tBillModel.setNo_telephone(Integer.parseInt(tlp));
        int payment = tBillService.payment(tBillModel);

        if (payment != 0) {
            List<TelephoneBillModel> tblModel = tBillService.checkBill(tBillModel);
            for (TelephoneBillModel tbm : tblModel) {
                String name = tbm.getName();
                String period = tbm.getPeriod();
                String amount = String.valueOf(tbm.getAmount());
                String status = tbm.getStatus();

                return "{\"message\" : \"Thanks for payment.\"," +
                        "\n\"messageDetail\" : {" +
                        "\n\t\"Name\" : \"" + name + "\", " +
                        "\n\t\"Telephone\" : \"" + tlp + "\", " +
                        "\n\t\"Period\" : \"" + period + "\"," +
                        "\n\t\"Amount\" : " + amount + "," +
                        "\n\t\"Status\" : \"" + status +
                        "\"\n}\n}";
            }
        }
        return "{\"message\" : \"Telephone Number " + tlp + " not found\"\n}";
    }

}
