const mongoose=require("mongoose");

const INSURANCE_FRAUD=new mongoose.Schema(
  {
    policy_csl:{
      type:Number,
      default:0
    },
    policy_deductable:{
      type:Number,
      default:0
    },
    policy_annual_premium:{
      type:Number,
      default:0
    },
    umbrella_limit:{
      type:Number,
      default:0
    },
    capital_gains:{
      type:Number,
      default:0
    },
    capital_loss:{
      type:Number,
      default:0
    },
    number_of_vehicles_involved:{
      type:Number,
      default:0
    },
    property_damage:{
      type:Number,
      default:0,
      //haha
    },
    bodily_injuries:{
      type:Number,
      default:0
      //haha
    },
    police_report_available:{
      type:Number,
      default:0
      //haha
    },
    total_claim_amount:{
      type:Number,
      default:0
    },
    injury_claim:{
      type:Number,
      default:0
    },
    property_claim:{
      type:Number,
      default:0
    },
    vehicle_claim:{
      type:Number,
      default:0
    },
    years_as_customer:{
      type:Number,
      default:0
    }
  },

  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }

);


module.exports = mongoose.model("insuranceFraud",INSURANCE_FRAUD);