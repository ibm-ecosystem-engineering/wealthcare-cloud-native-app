--    This sql is executed only when H2 db is enabled in application.properties. This will not be executed for DB2.
--  This sql file should be available in both wealthusers and wealthfinancialplan services

	drop table IF EXISTS Wcusers;
	create table Wcusers (
        id INTEGER IDENTITY(10001,1),
        UserName varchar(40),
        Password varchar(40),
        EmailId varchar(40),
        role varchar(40)
    );  

    drop table IF EXISTS WcBusinessManager;
    create table WcBusinessManager (
        id INTEGER IDENTITY(20001,1),
        WcUserId INT,
        FirstName varchar(40),
        LastName varchar(40),
        StartDate date
    );

    drop table IF EXISTS WcWealthManager;
    create table WcWealthManager (
        id INTEGER IDENTITY(30001,1),
        WcUserId INT,
        FirstName varchar(40),
        LastName varchar(40),
        Gender varchar(10),
        City varchar(40),
        Phone varchar(10),
        EmailId varchar(40),
        StartDate date,
        Country varchar (20),
        ZipCode varchar (20)
    );

    drop table IF EXISTS WcCustomer;
    create table WcCustomer (
        id INTEGER IDENTITY(40001,1),
        WcUserId INT,
        WcWealthManagerId INT,

        FirstName varchar(40),
        LastName varchar(40),
        Gender varchar(10),
        Age INT,
        AvgIncome double,

        Married BOOLEAN,

        SpouseFirstName varchar(40),
        SpouseLastName varchar(40),
        SpouseGender varchar(10),
        SpouseAge INT,
        SpouseAvgIncome double,

        NoOfChildren INT,

        Child1FirstName varchar(40),
        Child1LastName varchar(40),
        Child1Gender varchar(10),
        Child1Age INT,

        Child2FirstName varchar(40),
        Child2LastName varchar(40),
        Child2Gender varchar(10),
        Child2Age INT,

        City varchar(40),
        Phone varchar(10),
        EmailId varchar(40),
        StartDate date,
        Country varchar (20),
        ZipCode varchar (20)
    );

    drop table IF EXISTS WcGoal;
    create table WcGoal (
        id INTEGER IDENTITY(50001,1),

       WcCustomerId INT,

       WcWealthManagerId INT,
       GoalReference varchar(80),
       GoalDesc varchar(80),
       StartDate date,
       TargetDate date,
       TargetAmount double
    );

    drop table IF EXISTS WcInvestment;
    create table WcInvestment(
        id INTEGER IDENTITY(60001,1),
       WcGoalId INT,
       InvestmentDate date,
       InvestmentAmount double,
       StockAmount double,
       MutualFundAmount double,
       FixedDepositAmount double
    );
