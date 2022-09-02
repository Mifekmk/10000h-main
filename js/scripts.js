const startButton = document.querySelector('.start_button');
const modalButton = document.querySelector('.modal_button');
const shareButton = document.querySelector('.share_button');
const linkButton = document.querySelector('.link_button');

const loading = document.querySelector('.loading');
const result = document.querySelector('.result');

const fieldValue = document.querySelector('#field_value');
const fieldResult = document.querySelector('.field_result');

const timeValue = document.querySelector('#time_value');
const timeResult = document.querySelector('.time_result');

const Year = document.querySelector('.year_result');
const Month = document.querySelector('.month_result');



function after_click(){
    
    
    loading.style.display = 'none';
    result.style.display = 'flex'
    
    fieldResult.innerText = fieldValue.value;
    
    const dayValue = parseInt( (10000 / timeValue.value) );
    
    timeResult.innerText = dayValue;
    
    const yearValue = parseInt( (dayValue / 365) );
    
    Year.innerText = yearValue;
    
          
    const monthValue = parseInt( (dayValue / 30.5) - (yearValue * 12) );
        
    Month.innerText = monthValue;
    
    

}

function click_start_button(){
    if (fieldValue.value == ""){
        
        alert('분야를 입력해 주세요.');
        fieldValue.focus();
        return false;
    }else if (timeValue.value == ""){
        alert('시간을 입력해 주세요');
        timeValue.focus();
        return false;
    }else if (timeValue.value > 24){
        alert('시간을 24이하 값으로 입력해 주세요.');
        timeValue.focus();
        return false;
    }

    loading.style.display = 'flex';
    result.style.display = 'none'
    setTimeout(after_click, 1500);

}

function copy_url(){
    let url = window.location.href;
    let tmp = document.createElement('input');
    
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
    alert('URL이 복사되었습니다.');  
}

function open_modal(){
	modal.style.display = 'none';	
}

function close_modal(){
	modal.style.dixplay = 'none';
}

window.onclick = function(event){
	if (event.target == modal){
		close_modal();
	}
}

function move_link(){
	var newWindow = window.open("about:blank");
	var link = 'https://github.com/Mifekmk';
	newWindow.location.href = link;
}


startButton.addEventListener("click", click_start_button);
shareButton.addEventListener("click", copy_url);
modalButton.addEventListener("click", open_modal);
linkButton.addEventListener("click", move_link);