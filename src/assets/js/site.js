function startEditor() 
{
    $('.tr-editor').trumbowyg({
        lang: 'ko',
        semantic: {
            'b': 'strong',
            'i': 'em',
            's': 'del',
            'strike': 'del',
            'div': 'div'
        }
    })
    .on('tbwblur', function() {
        document.getElementById("article_content").value = document.getElementsByClassName('trumbowyg-editor')[0].innerHTML;        
    });   
}

function addElement(el) 
{
/** 엘리먼트의 첫번째 child를 복사해서 엘리먼트 내부의 마지막에 추가한다 */
    document.getElementById(el).insertAdjacentHTML("beforeend", document.getElementById(el).firstChild.outerHTML); 
}

function removeElement(el, obj) 
{   
    // 선택한 노드의 자식노드 갯수를 가져온다        
    if (document.getElementById(el).childNodes.length == 1)
    {
        //input field의 값을 초기화 시킴
        document.getElementById(el).firstChild.firstChild.firstChild.value = '';
    }
    else
    {
        //버튼의 부모노드를 찾아가서 해당 노드를 삭제: 노드는 HTML Tag 임
        document.getElementById(el).removeChild(obj.parentNode.parentNode.parentNode); 
    }
}