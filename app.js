const http = require('http');
const fs = require('fs');

// HTTP => request response

http.createServer((request, response)=>{
	const file = request.url == '/' ? 
	'./WWW/index.html' : `./WWW${request.url}`;
console.log(request.url)
	if(request.url == '/registro'){
		let data = [];
		request.on("data", value =>{
			data.push(value);
		}).on("end", ()=>{
			let params = Buffer.concat(data).toString();
			response.write(params);
			response.end();
		});

	}else{
		fs.readFile(file, (err, data)=>{
			if(err) {
				response.writeHead(404, {"Content-Type" :"text/plain"});
				response.write("not found");
				response.end();

			}else{
				const extension = request.url.split('.').pop();
				switch(extension){
					case 'txt':
						response.writeHead(200, {"Content-Type":"text-plain"});
						break;
					case 'html':
						response.writeHead(200, {"Content-Type":"text-html"});
						break;
					case 'css':
						response.writeHead(200, {"Content-Type":"text-css"});
						break;
					case 'js':
						response.writeHead(200, {"Content-Type":"text-javascript"});
						break;
					case 'jpeg':
						response.writeHead(200, {"Content-Type":"image-jpeg"});
					break;
					case 'png':
						response.writeHead(200, {"Content-Type":"imag/png"});
						break;
					default:
						response.writeHead(200, {"Content-Type":"text-html"});
							
							

				}
				
				response.write(data);
				response.end();

			}
				
		});
	}
}).listen(4444);