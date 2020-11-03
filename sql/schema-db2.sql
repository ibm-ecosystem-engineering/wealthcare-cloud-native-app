	--    This schema file is for DB2

    drop table wcusers;
	create table wcusers (
        id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 10001, INCREMENT BY 1),
        UserName varchar(40),
        Password varchar(40),
        EmailId varchar(40),
        role varchar(40),
        PRIMARY KEY (id)
    );

    drop table wcbusinessmanager;
    create table wcbusinessmanager (
        id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 20001, INCREMENT BY 1),
        WcUserId INTEGER,
        FirstName varchar(40),
        LastName varchar(40),
        StartDate date,
        PRIMARY KEY (id)
    );

    drop table wcwealthmanager;
    create table wcwealthmanager (
        id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 30001, INCREMENT BY 1),
        WcUserId INTEGER,
        FirstName varchar(40),
        LastName varchar(40),
        Gender varchar(10),
        City varchar(40),
        Phone varchar(10),
        EmailId varchar(40),
        StartDate date,
        Country varchar (20),
        ZipCode varchar (20),
        PRIMARY KEY (id)
    );

    drop table wccustomer;
    create table wccustomer (
        id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 40001, INCREMENT BY 1),

        WcUserId INTEGER,
        wcwealthmanagerId INTEGER,

        FirstName varchar(40),
        LastName varchar(40),
        Gender varchar(10),
        Age INTEGER,
        AvgIncome double,

        Married BOOLEAN,

        SpouseFirstName varchar(40),
        SpouseLastName varchar(40),
        SpouseGender varchar(10),
        SpouseAge INTEGER,
        SpouseAvgIncome double,

        NoOfChildren INTEGER,

        Child1FirstName varchar(40),
        Child1LastName varchar(40),
        Child1Gender varchar(10),
        Child1Age INTEGER,

        Child2FirstName varchar(40),
        Child2LastName varchar(40),
        Child2Gender varchar(10),
        Child2Age INTEGER,

        City varchar(40),
        Phone varchar(10),
        EmailId varchar(40),
        StartDate date,
        Country varchar (20),
        ZipCode varchar (20),

        PRIMARY KEY (id)
    );

    drop table wcgoal;
    create table wcgoal (
       id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 50001, INCREMENT BY 1),
       wccustomerId INTEGER,

       wcwealthmanagerId INTEGER,
       GoalReference varchar(80),
       GoalDesc varchar(80),
       StartDate date,
       TargetDate date,
       TargetAmount double,

       PRIMARY KEY (id)
    );

    drop table wcinvestment;
    create table wcinvestment(
       id INTEGER  NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 60001, INCREMENT BY 1),
       wcgoalId INTEGER,
       InvestmentDate date,
       InvestmentAmount double,
       StockAmount double,
       MutualFundAmount double,
       FixedDepositAmount double,

       PRIMARY KEY (id)
    );
