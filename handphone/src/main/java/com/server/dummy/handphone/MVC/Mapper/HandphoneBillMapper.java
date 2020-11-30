package com.server.dummy.handphone.MVC.Mapper;

import com.server.dummy.handphone.MVC.Model.HandphoneBillModel;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface HandphoneBillMapper {

    String cekBill = "SELECT handphone_bill.name, no_handphone, amount, period, status, provider FROM handphone_bill WHERE handphone_bill.no_handphone=#{no_handphone};";
    @Select(cekBill)
    @Results({
            @Result(column = "name", property = "name"),
            @Result(column = "no_handphone", property = "no_handphone"),
            @Result(column = "amount", property = "amount"),
            @Result(column = "period", property = "period"),
            @Result(column = "status", property = "status"),
            @Result(column = "provider", property = "provider")
    })
    List<HandphoneBillModel> cekBill(HandphoneBillModel handphoneBillModel);

    String payment = "UPDATE handphone_bill SET handphone_bill.status='Paid' WHERE handphone_bill.no_handphone=#{no_handphone};";
    @Update(payment)
    int payment(HandphoneBillModel handphoneBillModel);
}
