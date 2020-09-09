package com.wealth.wealthfinancialplan.watson;

public class FpOutputInfo {

    private double stockinvestment;
    private double mutualinvestment;
    private double fixeddepositinvestment;

    public double getStockinvestment() {
        return stockinvestment;
    }

    public void setStockinvestment(double stockinvestment) {
        this.stockinvestment = stockinvestment;
    }

    public double getMutualinvestment() {
        return mutualinvestment;
    }

    public void setMutualinvestment(double mutualinvestment) {
        this.mutualinvestment = mutualinvestment;
    }

    public double getFixeddepositinvestment() {
        return fixeddepositinvestment;
    }

    public void setFixeddepositinvestment(double fixeddepositinvestment) {
        this.fixeddepositinvestment = fixeddepositinvestment;
    }


    @Override
    public String toString() {
        return "FpOutputInfo{" +
                "stockinvestment=" + stockinvestment +
                ", mutualinvestment=" + mutualinvestment +
                ", fixeddepositinvestment=" + fixeddepositinvestment +
                '}';
    }
}
