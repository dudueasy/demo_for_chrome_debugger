// 将这个文件复制到 chrome snippets 中运行
script = document.createElement('script');
script.src = 'https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.js';

document.body.appendChild(script)

// 通过 debugger 来获得 i 为 8971 时的 md5 值
for(let i = 0; i< 10000 ; i++){
  let  currentHash = md5(i)
}
