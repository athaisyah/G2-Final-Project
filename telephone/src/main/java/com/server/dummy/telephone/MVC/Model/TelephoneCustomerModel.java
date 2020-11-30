package com.server.dummy.telephone.MVC.Model;

public class TelephoneCustomerModel {
    private int id_customer;
    private String name;
    private int no_telephone;
    private String address;

    public TelephoneCustomerModel(int id_customer, String name, int no_telephone, String address){
        this.id_customer = id_customer;
        this.name = name;
        this.no_telephone = no_telephone;
        this.address = address;
    }

    public TelephoneCustomerModel(int no_telephone){
        this.no_telephone = no_telephone;
    }

    public TelephoneCustomerModel(){
    }

    public int getId_customer() {
        return id_customer;
    }

    public void setId_customer(int id_customer) {
        this.id_customer = id_customer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNo_telephone() {
        return no_telephone;
    }

    public void setNo_telephone(int no_telephone) {
        this.no_telephone = no_telephone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
