const stepsLadder = {
    count: 0,
    doStepUp: function () {
        this.count++;
        return this;
    },
    doStepDown: function () {
        this.count--;
        return this;
    },
    getShowStep: function () {
        alert(this.count);
        return this;
    }
};
stepsLadder.doStepUp().doStepDown().doStepDown().getShowStep();