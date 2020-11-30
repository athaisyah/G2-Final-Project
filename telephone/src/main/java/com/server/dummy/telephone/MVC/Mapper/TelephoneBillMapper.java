package com.server.dummy.telephone.MVC.Mapper;

import com.server.dummy.telephone.MVC.Model.TelephoneBillModel;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface TelephoneBillMapper {

    /* TABLE TELEPHONE CUSTOMER */
//    id_customer, name, no_telephone, address
    /* TABLE TELEPHONE BILL */
//    id_bill, name, no_telephone, amount, period, status, id_customer

    String cekBill = "SELECT telephone_bill.name, no_telephone, amount, period, status FROM telephone_bill WHERE telephone_bill.no_telephone=#{no_telephone};";
    @Select(cekBill)
    @Results({
            @Result(column = "name", property = "name"),
            @Result(column = "no_telephone", property = "no_telephone"),
            @Result(column = "amount", property = "amount"),
            @Result(column = "period", property = "period"),
            @Result(column = "status", property = "status")
    })
    List<TelephoneBillModel> cekBill(TelephoneBillModel telephoneBillModel);

    String payment = "UPDATE telephone_bill SET telephone_bill.status='Paid' WHERE telephone_bill.no_telephone=#{no_telephone};";
    @Update(payment)
    int payment(TelephoneBillModel telephoneBillModel);

}
