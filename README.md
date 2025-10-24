# baitap2
## 1. Cài đặt Apache web server
   
 ### 1.1.1   Vô hiệu hoá IIS
 <img width="976" height="512" alt="image" src="https://github.com/user-attachments/assets/1812f9c6-fb2c-4639-80b9-dd7255a371d1" /> 
 
 ### 1.1.2 Download apache server và  giải nén ra ổ D
 <img width="800" height="274" alt="image" src="https://github.com/user-attachments/assets/a8e3667d-07f3-4a88-8ab5-65a94e7942be" /> 
 
 ### 1.1.3  cấu hình các file 
   <img width="657" height="467" alt="image" src="https://github.com/user-attachments/assets/4eafafef-fdfa-4fa8-9fa5-2b89cbcb97c3" />
  <img width="581" height="84" alt="image" src="https://github.com/user-attachments/assets/bb04f796-0a1b-4950-a5f8-520564335a23" /> 
  
 ### 1.1.4 fake ip 127.0.0.1 cho domain này 
<img width="638" height="608" alt="image" src="https://github.com/user-attachments/assets/2919fda4-f0db-4477-8430-2ea393febecb" />

### 1.1.5 để tạo website với domain và đặt code 
<img width="423" height="193" alt="image" src="https://github.com/user-attachments/assets/e7c35052-ae73-4ba4-ac1f-1c981fb59307" />
<img width="804" height="355" alt="image" src="https://github.com/user-attachments/assets/2148366f-fde6-4a8a-8912-34803b34c340" />
<img width="619" height="365" alt="image" src="https://github.com/user-attachments/assets/417365a1-7f24-4c26-9b05-b54377ebc262" /> 

## 2. Cài đặt nodejs và nodered 
### 2.1 Cài đặt nodejs 
### 2.1.1 download file  nodejs 
<img width="631" height="39" alt="image" src="https://github.com/user-attachments/assets/b48b26ca-12d3-4627-8f28-b9bc1131e830" /> 

### 2.1.2 cài đặt vào thư mục `D:\nodejs` 
<img width="488" height="377" alt="image" src="https://github.com/user-attachments/assets/29de44ce-9bdf-490d-98fc-0864850c24d1" />  
<img width="417" height="237" alt="image" src="https://github.com/user-attachments/assets/2649f1d4-e8b0-4a73-b330-2791213bd40c" /> 

### 2.2 Cài đặt nodered 
### 2.2.1 chạy cmd, vào thư mục `D:\nodejs`
<img width="331" height="157" alt="image" src="https://github.com/user-attachments/assets/0b0db6a2-b11e-49ad-8536-da92676204f0" /> 

### 2.2.2 chạy lệnh `npm install -g --unsafe-perm node-red --prefix "D:\nodejs\nodered"` 
 <img width="965" height="379" alt="image" src="https://github.com/user-attachments/assets/631c44c7-2d2b-4717-9bf5-3d6e66787837" /> 
 
### 2.2.3 download file: https://nssm.cc/release/nssm-2.24.zip và giải nén 
<img width="649" height="38" alt="image" src="https://github.com/user-attachments/assets/bd41fac0-80ec-4162-9c60-38f9ffc118b5" /> 

### 2.2.4 copy nssm.exe vào thư mục `D:\nodejs\nodered\` 
<img width="1050" height="620" alt="image" src="https://github.com/user-attachments/assets/a0f9f215-57b4-4d1a-8ab8-2abb800ca1b9" /> 

### 2.2.5 tạo file "D:\nodejs\nodered\run-nodered.cmd"
<img width="983" height="328" alt="image" src="https://github.com/user-attachments/assets/30c587c9-9b88-400c-b323-3c76a544174e" /> 

<img width="914" height="619" alt="image" src="https://github.com/user-attachments/assets/311a88f3-546a-4fad-8f35-ec5f5f611328" /> 

### 2.2.6 Di chuyển đến thư mục Node-RED
<img width="364" height="169" alt="image" src="https://github.com/user-attachments/assets/e370d329-4537-4273-a5a4-16b2470678ed" /> 

### 2.2.7 Cài service cho Node-RED 
<img width="921" height="249" alt="image" src="https://github.com/user-attachments/assets/8572ad76-d3b5-432e-bb92-f079a85830a4" />

### 2.2.8 Node-RED đã chạy thành công hoàn toàn tại địa chỉ http://localhost:1880
<img width="1873" height="1041" alt="image" src="https://github.com/user-attachments/assets/1b739fcc-01d4-47e8-b9f2-734b30b377cd" />

## 3. Tạo csdl tuỳ ý trên mssql (sql server 2022)
<img width="1464" height="935" alt="image" src="https://github.com/user-attachments/assets/03233fd2-1d68-4153-af92-4429752eabb7" />

## 4. Cài đặt thư viện trên nodered
 ## 4.1  truy cập giao diện nodered bằng url: http://localhost:1880
   <img width="1871" height="1026" alt="image" src="https://github.com/user-attachments/assets/0cc61ecf-f8d0-4c9a-b971-4f739b61448d" /> 
   
 ## 4.2  cài đặt các thư viện: node-red-contrib-mssql-plus, node-red-node-mysql, node-red-contrib-telegrambot, node-red-contrib-moment, node-red-contrib-influxdb, node-red-contrib-duckdns, node-red-contrib-cron-plus
   <img width="1774" height="992" alt="image" src="https://github.com/user-attachments/assets/00f8367e-e8e3-4ce3-a776-3ac6f792842d" /> 
   
  ## 4.3 Sửa file `D:\nodejs\nodered\work\settings.js` :
   <img width="927" height="890" alt="image" src="https://github.com/user-attachments/assets/872b97a0-dc4b-464a-a7ff-7cbd27361487" /> 
   
  ## 4.4  thiết lập mat khau bằng tool: https://tms.tnut.edu.vn/pw.php
   <img width="743" height="366" alt="image" src="https://github.com/user-attachments/assets/ec05cdd5-3b05-45d9-aa1f-7f4ae281ddcb" /> 
   
   <img width="751" height="241" alt="image" src="https://github.com/user-attachments/assets/d3da9465-232e-4a46-95a3-e5b65e4ab565" /> 
   
  ## 4.5 khởi động lại nodered
   <img width="646" height="383" alt="image" src="https://github.com/user-attachments/assets/7752393a-4b8f-4fe6-a570-82e4886979ac" /> 
   
 ## 4.6  vào nodered
   <img width="1465" height="863" alt="image" src="https://github.com/user-attachments/assets/9e0c4975-c652-4659-baff-a2476573515b" /> 
   
   <img width="1865" height="928" alt="image" src="https://github.com/user-attachments/assets/7cf2bea7-ff1a-4490-8c6a-31aa78c4fa52" />

## 5. tạo api back-end bằng nodered:
   
  ### 5.1 tại flow1 trên nodered, sử dụng node `http in` và `http response` để tạo api
   <img width="555" height="232" alt="image" src="https://github.com/user-attachments/assets/1c132b3d-b459-40df-98ba-f978cd0e2793" />
   
 ### 5.2  thêm node `MSSQL` để truy vấn tới cơ sở dữ liệu
   <img width="1062" height="741" alt="image" src="https://github.com/user-attachments/assets/87902c2e-7e19-4c71-94cc-10dca8ef2ddb" /> 

  ### 5.3 logic flow sẽ gồm 4 node theo thứ tự sau (thứ tự nối dây)
   <img width="1323" height="873" alt="image" src="https://github.com/user-attachments/assets/bcb98d4c-877b-471d-b75a-ed55b87c4eec" /> 
 
  ### 5.4 test api thông qua trình duyệt
  <img width="1039" height="974" alt="image" src="https://github.com/user-attachments/assets/35be4b0d-0407-4b41-b08d-b3506c15dff6" /> 
  
  <img width="1036" height="732" alt="image" src="https://github.com/user-attachments/assets/3021f357-8ea7-4e27-9806-6066d0e6b3a0" /> 

## 6. Tạo giao diện front-end:
  ### 6.1 tạo 3 file này đặt trong thư mục: `D:\Apache24\fullname`
<img width="742" height="238" alt="image" src="https://github.com/user-attachments/assets/a5b511e3-dfed-42bd-9c22-a0d79844f07b" />

  ### 6.2 chạy kết quả và thử test 
<img width="1497" height="851" alt="image" src="https://github.com/user-attachments/assets/cbfd5c48-156c-4575-a21f-df6eb122c9e2" /> 

## 7. Nhận xét bài làm của mình
Em đã hiểu rõ cách cài đặt các phần mềm và thư viện cần thiết. Apache được cấu hình thành công để chạy website cá nhân với domain lanhducmanh.com, NodeJS và Node-RED được cài đặt thủ công bằng nssm để chạy ổn định như một dịch vụ. Em đã cài đủ các thư viện như mssql-plus, moment, cron-plus, hiểu cách chúng giúp Node-RED kết nối và xử lý dữ liệu trong cơ sở dữ liệu.
Em đã tạo được API back-end trong Node-RED gồm 4 node: http in → function → MSSQL → http response. API hoạt động tốt, nhận tham số tìm kiếm và trả dữ liệu JSON từ CSDL. Qua đó, em hiểu cách Node-RED xử lý luồng dữ liệu mà không cần viết code phức tạp.
Phần front-end gồm 3 file index.html, lanhducmanh.css, lanhducmanh.js được đặt trong thư mục D:\Apache24\lanhducmanh. Giao diện có form nhập, gửi yêu cầu đến API và hiển thị kết quả trả về. Em hiểu rõ cách front-end tương tác với back-end thông qua request và response.



 


   
 
   
























   


   





