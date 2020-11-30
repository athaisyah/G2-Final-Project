package com.server.dummy.handphone.MVC.Service;

import com.server.dummy.handphone.MVC.Mapper.HandphoneBillMapper;
import com.server.dummy.handphone.MVC.Model.HandphoneBillModel;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.Reader;
import java.util.List;

@Service
public class HandphoneBillService {

    HandphoneBillMapper hBillMapper;
    SqlSession session;

    public void connectMyBatis() {
        try {
            Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
            session = sqlSessionFactory.openSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
        session.getConfiguration().addMapper(HandphoneBillMapper.class);
        hBillMapper = session.getMapper(HandphoneBillMapper.class);
    }

    public List<HandphoneBillModel> checkBill(HandphoneBillModel hBillModel) {
        connectMyBatis();
        List<HandphoneBillModel> result = hBillMapper.cekBill(hBillModel);
        session.commit();
        return result;
    }

    public int payment(HandphoneBillModel hBillModel) {
        connectMyBatis();
        int result = hBillMapper.payment(hBillModel);
        session.commit();
        return result;
    }
}
