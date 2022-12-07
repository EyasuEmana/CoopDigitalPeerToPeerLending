/**
 * bellow is dummy data prepared for front end test.
 * There might be added or removed fields in advance
 */

/**
 * two account types(Lender, borrower) are depicted. there is "entryCategory" 
 * image.pngfield from dummy data to destinguish them.
 */

const userAccount = [
  {
    id: "839587jgjg",
    username: "Eyasu Emana Hambisa",
    password: "@Eyasu123",
    accountnumber: "1049900030127",
    profileImage: "eyasuimage.jpeg",
    phoneNum: "0947898476",
    email: "eyasu@gmail.com",
    sex:"male",
    creditScore: "",
    borrowedfrequency: "",
    paidbackfrequency: "",
    lendersFeedback: {
      lenderid: "",
      feedback: "",
    },
    report: [
      {
        reportersid: "",
        issueTitle: [],
        issueDescription:[],
      },
    ],
    incomePerMonth: 10000,
    entryCategory: "Borrower",
    jobCategory: ["Employee"],
    address: {
      BirthPlace: "West wollega",
      currentResidence: "Addis Ababa",
    },
    age: 24,
    criminalRegistration: {//NB: might be excluded on MVP 1 
      question: "Do you have criminal registration?",
      answer: "No",
      commitedCrime: [],
    },
    kebeleId: "MyKebeleId.pdf",
    jobId: "myJobId.pdf",
    drivingLicence: "mydrivinglicence.pdf",
  },
  {
    id: "839587jgjh",
    username: "Bonsa Gemechu Nemera",
    password: "@yomiyu123",
    accountnumber: "1049900030127",
    profileImage: "bonsaimage.jpg",
    phoneNum: "0947898477",
    email: "bonsa@gmail.com",
    sex:"male",
    creditScore: "80",
    borrowedfrequency: "5",
    paidbackfrequency: "4",
    lendersFeedback: {
      lenderid: "",
      feedback: "",
    },
    report: [
      {
        reportersid: "",
        issueTitle: [],
        issueDescription:[],
      },
    ],
    report: [
      {
        reportersid: "",
        issueTitle: [],
        issueDescription:[],
      },
    ],
    incomePerMonth: 10000,
    entryCategory: "Borrower",
    jobCategory: ["Business man"],
    address: {
      BirthPlace: "Arsi",
      currentResidence: "Nekemte",
    },
    age: 30,
    criminalRegistration: {
      question: "Do you have criminal registration?",
      answer: "yes",
      commitedCrime: ["Fraud"],
    },
    kebeleId: "myId.pdf",
    jobId: "myJobId.pdf",
    drivingLicence: "mydrivinglicence.pdf",
  },
  {
    id: "879587jgjs",
    username: "Ayantu Dugasa Olani",
    password: "@fro123",
    accountnumber: "1059910030197",
    profileImage: "ayuimage.jpeg",
    phoneNum: "0947898437",
    email: "ayu2022@gmail.com",
    sex:"female",
    creditScore: "",
    Lentfrequency: "",
    recievedbackfrequency: "",
    borrowersFeedback: {
      borrowerid: "",
      feedback: "",
    },
    incomePerMonth: 10000,
    entryCategory: "Lender",
    jobCategory: ["Business Woman"],
    address: {
      BirthPlace: "Hararge",
      currentResidence: "Addis Ababa",
    },
    age: 40,
    criminalRegistration: {
      question: "Do you have criminal registration?",
      answer: "No",
      commitedCrime: [],
    },
    kebeleId: "MyKebeleId.pdf",
    jobId: "myJobId.pdf",
    drivingLicence: "mydrivinglicence.pdf",
  },
];

/**
 * common for all user type
 */
const commondata = {
  entryCategory:["Borrower","Lender"],
  criminaltypes: ["Political issue", "Fraud", "Steal others wealth"],
  category: ["Employee", "Business man", "Driver", "Student", "other"],
  reportIssues:["Didn't  payback timely.","Scam","Totally didn't payback"]
};

/**
 * NB: I created the following data assuming that the system will provide 
 * functionality that enables borrower to send request to lenders.
 */
const borrowRequestform = [
  {
    formId:"703475ghrj",
    borrowerId: userAccount[0].id, //foreign key
    lenderId:userAccount[2].id,   //foreign key
    petitiontitle: "",
    petitiondescription: "",
    amountOfMoney: "40,000",
    issuedDate:"10/4/2014",
    paybackDate: "18/6/2014",
    supplementaryProposal: "proposal.pdf",
    flags: {
      isRecieved: false, 
      // isSelected: true,
      // isSeen: true,
      isRejected: false,
      isApproved:true,
      isPaidBack:false,
      permittedToPhoneDiscussion: true,
      permittedToLiveDiscussion: true,
    },
  },
];

export {userAccount, borrowRequestform, commondata}
