let apiPostsApi = new TempApi.PostsApi();import TempApi from '../src/index';document.getElementById('id5g').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Works' ;}};document.getElementById('iarq3').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Blog' ;}};window.onload = () => {apiPostsApi.getAllposts((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("im4p5").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};