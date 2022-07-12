const API='https://youtube-v31.p.rapidapi.com/search?channelId=UCBLCvUUCiSqBCEc-TqZ9rGw&part=snippet%2Cid&order=date&maxResults=9'
const content=null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd6f060bd2mshd137c4a751ac4dfp139506jsn15839b8cc903',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;
}

(async()=>{
    try{
        const videos=await fetchData(API);
        let view=`
            ${videos.items.map(i=>
                
                `<div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${i.snippet.thumbnails.high.url}" alt="${i.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${i.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join("")}
            
        `;
        
     content.innerHTML=view;
     
    
    }catch(Error){
        console.log(Error);
    }
})();