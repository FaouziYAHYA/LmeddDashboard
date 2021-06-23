const xlabels=[];
      
chartIt();
async function chartIt(){  
  await getData();
  const ctx = document.getElementById('linechart').getContext('2d');
  const xlabels=[];
  const ytemps=[];
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          /*labels: xlabels,*/
          datasets: [{
              label: 'CPG',
              data: [12, 19, 3, 5, 2, 3],
              /*data: ytemps,*/
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }
        ]
      }
  });
}
  
async function getData(){
  const response=await fetch('ZonAnn.csv');
  const data=await response.text();
  const table=data.split('\n').slice(1);
  table.forEach(row=>{
    const columns = row.split(',');
    const year=columns[0];
    xlabels.push(year);
    const temp=columns[1];
    ytemps.push(parseFloat(temp));
    /*const time=date.split(' ')[1];*/
    
    console.log(year,temp);
  });
}