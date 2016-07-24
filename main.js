var moment = require('moment-business-days');
moment.suppressDeprecationWarnings = true;
	
const readline = require('readline');
 
var lebaran=['2016-07-04','2016-07-05','2016-07-06', '2016-07-07','2016-07-08']
var kemerdekaan='2016-08-17';

moment.locale('id', {
   holidays: lebaran,
   holidayFormat: 'YYYY-MM-DD' 
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Tanggal: (YYYY-MM-DD)', (answer) => {
  var inputDate = moment().startOf('day');
  if (answer)
    inputDate = moment(answer, 'YYYY-MM-DD');

  rl.question('Tambah Hari: ', (days) => {
    if (!days)
      days = 0;

    console.log("Estimate: ", inputDate.businessAdd(days)._d);
    console.log("Days until 31 Aug: ", moment('2016-08-30').businessDiff(inputDate));
    rl.close();
  });
});

