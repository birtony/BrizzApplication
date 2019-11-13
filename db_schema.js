const schema = {
  // Interests Schema
  interests: [
    {
      accounting: Boolean,
      administration: Boolean,
      acting: Boolean,
      arts: Boolean,
      aviation: Boolean,
      broadcasting: Boolean,
      business: Boolean,
      chemistry: Boolean,
      civilEngineering: Boolean,
      computerNetworking: Boolean,
      cosmetics: Boolean,
      legal: Boolean,
      programming: Boolean,
      childhoodEducation: Boolean,
      electronics: Boolean,
      fashion: Boolean,
      fireProtection: Boolean,
      fitness: Boolean,
      flightServices: Boolean,
      hospitality: Boolean,
      mediaDesign: Boolean,
      journalism: Boolean,
      justice: Boolean,
      law: Boolean,
      mechanicalEngineering: Boolean,
      opticianry: Boolean,
      paralegal: Boolean,
      photography: Boolean,
      police: Boolean,
      nursing: Boolean,
      socialService: Boolean,
      tourism: Boolean,
      veterinary: Boolean
    }
  ],

  // Program Schema
  programs: [
    {
      id: Number,
      name: String,
      address: String,
      location: {
        lat: Number,
        lon: Number
      },
      email: String,
      phone: String,
      yearlyCost: Number,
      description: String,
      requiredIelts: Number,
      requiredGpa: Number,
      interests: Interests
    }
  ],

  // User Schema
  users: [
    {
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      statusActivated: Boolean,
      activationCode: String,
      firstName: String,
      lastName: String,
      birthDate: String,
      gender: String,
      complete: Boolean,
      lastUse: Date,
      interests: Interests,
      ielts: Number,
      international: Boolean,
      originCountry: String,
      yearBudget: {
        type: String,
        enum: [
          "UNDEFINED",
          "1k-5k",
          "5k-10k",
          "10k-15k",
          "15k-20k",
          "20k-25k",
          "25k+"
        ],
        default: "UNDEFINED"
      }
    }
  ]
};
