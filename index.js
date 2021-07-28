const A = [
  {
    id: 1,
    shipmentCode: "NA001-001",
    cbvNo: "NA001",
    orderDate: "2021-07-05",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: null,
    referralCode: "REF-NA001-001",
    active: true,
    paid: false,
    buynship: true,
    transactionId: null,
    shipmentCharges: 0,
    userId: 4,
    shipmentStatusId: 3,
    receiverId: 2,
  },
  {
    id: 2,
    shipmentCode: "AC002-002",
    cbvNo: "AC002",
    orderDate: "2021-07-05",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "PLANE",
    referralCode: "REF-AC002-002",
    active: true,
    paid: false,
    buynship: true,
    transactionId: "IUYI7656YU",
    shipmentCharges: 13,
    userId: 4,
    shipmentStatusId: 3,
    receiverId: 3,
  },
  {
    id: 3,
    shipmentCode: "CO003-003",
    cbvNo: "CO003",
    orderDate: "2021-07-05",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "SHIP",
    referralCode: "REF-CO003-003",
    active: true,
    paid: true,
    buynship: true,
    transactionId: "IUYI7656YU",
    shipmentCharges: 5.9,
    userId: 4,
    shipmentStatusId: 5,
    receiverId: 4,
  },
  {
    id: 5,
    shipmentCode: "NA004-001",
    cbvNo: "NA004",
    orderDate: "2021-07-06",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: null,
    referralCode: "REF-NA004-001",
    active: true,
    paid: false,
    buynship: true,
    transactionId: null,
    shipmentCharges: 0,
    userId: 11,
    shipmentStatusId: 3,
    receiverId: 6,
  },
  {
    id: 6,
    shipmentCode: "NA005-001",
    cbvNo: "NA005",
    orderDate: "2021-07-06",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: null,
    referralCode: "REF-NA005-001",
    active: true,
    paid: false,
    buynship: true,
    transactionId: null,
    shipmentCharges: 0,
    userId: 13,
    shipmentStatusId: 3,
    receiverId: 7,
  },
  {
    id: 7,
    shipmentCode: "AC006-002",
    cbvNo: "AC006",
    orderDate: "2021-07-07",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "PLANE",
    referralCode: "REF-AC006-002",
    active: true,
    paid: false,
    buynship: false,
    transactionId: null,
    shipmentCharges: 33,
    userId: 11,
    shipmentStatusId: 1,
    receiverId: 6,
  },
  {
    id: 8,
    shipmentCode: "CO007-003",
    cbvNo: "CO007",
    orderDate: "2021-07-08",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "SHIP",
    referralCode: "REF-CO007-003",
    active: true,
    paid: false,
    buynship: false,
    transactionId: null,
    shipmentCharges: 28.85,
    userId: 11,
    shipmentStatusId: 1,
    receiverId: 6,
  },
  {
    id: 9,
    shipmentCode: "AC008-004",
    cbvNo: "AC008",
    orderDate: "2021-07-08",
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "PLANE",
    referralCode: "REF-AC008-004",
    active: true,
    paid: true,
    buynship: false,
    transactionId: "Helo",
    shipmentCharges: 33,
    userId: 11,
    shipmentStatusId: 1,
    receiverId: 6,
  },
];
const myfunction=()=>{
 
let B = [];
let element = {};
let count = 0;
let total_charges = 0;
let date =0;
let date;
let count = 0;
let total_charges;
let shipment = [];
let t = 0;
let s = A.length;
s = s - 1;

for (let i = 0; i < A.length; i++) {
  element.count = count;
  element.total_charges =total_charges;
  element.date = A[i].orderDate;
  for (let j = 0; j < A.length; j++) {
    if (element.date == A[j].orderDate) {
      element.count = element.count + 1;
      element.total_charges = element.total_charges + A[j].shipmentCharges;
      
    }
  }
  let t = i + 1;
 




  if (t <= s) {
    if (element.date < A[t].orderDate) {
      console.log(element.date);
      console.log(element.count);
      console.log(element.total_charges);
      B.push(element);
      
      
      
      
    }
    if (element.date == A[s].orderDate) {
      console.log(element.date);
      console.log(element.count);
      console.log(element.total_charges);
      B.push(element);
      
      
    }
    
  }
}
 console.log(B);
}
console.log(myfunction());

