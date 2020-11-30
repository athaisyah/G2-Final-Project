package com.server.dummy.telephone.MVC.Service;

import com.server.dummy.telephone.MVC.Mapper.TelephoneBillMapper;
import com.server.dummy.telephone.MVC.Model.TelephoneBillModel;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.Reader;
import java.util.List;

@Service
public class TelephoneBillService {

    TelephoneBillMapper tBillMapper;
    SqlSession session;

    public void connectMyBatis() {
        try {
            Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
            session = sqlSessionFactory.openSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
        session.getConfiguration().addMapper(TelephoneBillMapper.class);
        tBillMapper = session.getMapper(TelephoneBillMapper.class);
    }

    public List<TelephoneBillModel> checkBill(TelephoneBillModel tBillModel) {
        connectMyBatis();
        List<TelephoneBillModel> result = tBillMapper.cekBill(tBillModel);
        session.commit();
        return result;
    }

    public int payment(TelephoneBillModel tBillModel) {
        connectMyBatis();
        int result = tBillMapper.payment(tBillModel);
        session.commit();
        return result;
    }
}
