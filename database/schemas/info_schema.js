const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  footer_info: {
    website: {
      name: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    address: {
      type: String,
      required: true
    },
    AFSL: {
      type: String,
      required: true
    },
    ABN: {
      type: String,
      required: true
    }
  },
  childcare_info: {
    tel: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  hbb_info: {
    tel: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  accident_info: {
    tel: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  contact_info: {
    tel: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }

});

module.exports = InfoSchema;


