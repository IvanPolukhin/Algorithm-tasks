const staff = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  pissingAbout: 25,
};

function boredom(staff) {
  const staffValues = Object.values(staff);
  const totalBordem = staffValues.reduce(
    (total, currentValue) => total + currentValue
  );
  if (totalBordem < 80) {
    console.log("kill me now");
  } else if (totalBordem < 100 && totalBordem > 80) {
    console.log("I can handle this");
  } else if (totalBordem >= 100) {
    console.log("party time!!!");
  }
}
boredom(staff);
