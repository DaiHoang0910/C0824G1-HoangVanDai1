class Car {
    code;
    name;
    price;
    time;
    ownership;
    address;
    image;
    description;

    constructor(code, name, price, time, ownership, address, image, description) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.time = time;
        this.ownership = ownership;
        this.address = address;
        this.image = image;
        this.description = description;
    }

    setName(str1) {
        return this.name = str1;
    }

    getName() {
        return this.name;
    }

    setPrice(str2) {
        return this.price = str2;
    }

    getPrice() {
        return this.price;
    }

    setTime(str3) {
        return this.time = str3;
    }

    getTime() {
        return this.time;
    }

    setOwnership(str4) {
        return this.ownership = str4;
    }

    getOwnership() {
        return this.ownership;
    }

    setAddress(str5) {
        return this.address = str5;
    }

    getAddress() {
        return this.address;
    }

    setDescription(str6) {
        return this.description = str6;
    }

    getDescription() {
        return this.description;
    }

}

let arrCar = [];
let car0 = new Car(1, "Koenigsegg Regera “Honey”", "2 triệu USD", "", "Dan Kang", "America", "<img src=\"Koenigsegg%20Regera%20“Honey”.jpg\" alt=\"Card image\" style=\"width:100%\">", "Xe có ngoại thất bằng carbon phủ lớp kim cương đã nghiền nát để tạo hiệu ứng lấp lánh khi ra ngoài nắng.\n" +
    "            Gói trang bị Ghost Package thêm vài chi tiết bằng carbon như cản trước và vây cá hai mép cản.\n" +
    "            Động cơ 5 lít V8 tăng áp, đi kèm 3 môtơ điện, tổng công suất 1.500 mã lực và mô-men xoắn 2.000 Nm.\n" +
    "            Regera giới hạn 80 chiếc toàn thế giới.");
let car1 = new Car(2, "Pagani Huayra BC Roadster", "3,5 triệu USD", "", "doanh nhân người Hàn Quốc", "America", "<img src=\"Pagani%20Huayra%20BC%20Roadster.jpg\" alt=\"Card image\" style=\"width:100%\">", "Xe sản xuất giới hạn 40 chiếc và có số thứ tự 15. Ngoại thất bằng carbon màu xanh lá, kết hợp điểm nhấn màu\n" +
    "            cam.\n" +
    "            Xe sử dụng động cơ 6 lít V12 tăng áp kép của AMG, công suất 789 mã lực và mô-men xoắn 1.099 Nm.\n" +
    "            Là phiên bản Roadster, xe có phần mui cứng được mở thủ công, cửa mở ngang thay vì dạng cánh chim (gullwing).");
let car2 = new Car(3, "Ford GT ’67 Heritage Edition", "1,26 triệu USD", "", "Đặng Lê Nguyên Vũ", "America", "<img src=\"Ford%20GT%20’67%20Heritage%20Edition.jpg\" style=\"width:100%\">", "Ford GT ’67 Heritage Edition được trang bị bộ mâm 20 inch nguyên khối từ hợp kim nhôm siêu nhẹ, đi cùng hệ\n" +
    "            thống phanh gốm-carbon cùng kẹp phanh Brembo màu đỏ “ton-sour-ton”.\n" +
    "            Trong khi đó ở phía sau, xe được trang bị cụm đèn hậu và ống xả titan được hãng Akrapovic thiết kế riêng.\n" +
    "            Một trong những điểm thú vị trên Ford GT đó là hệ thống treo khí nén. Theo đó, nhờ một van điều tiết điện tử\n" +
    "            ở bên trong, xe có thể nâng/hạ độ cao 5 cm chỉ trong 1 giây.\n" +
    "            Tiếp đến là khung gầm carbon được tích hợp khung chống lật đạt chứng nhận của Liên đoàn ô tô Quốc tế (FIA)\n" +
    "            và gần như tương đương với xe đua của giải Le Mans.\n" +
    "            Cung cấp “sức mạnh” cho Ford GT ’67 Heritage Edition là khối động cơ EcoBoost V6, tăng áp kép, dung tích 3,5\n" +
    "            lít, tạo ra công suất tối đa 647 mã lực và 746 Nm.\n" +
    "            Sức mạnh của xe được truyền tới cầu sau qua hộp số ly hợp kép 7 cấp Powershift.\n" +
    "            Nhờ đó, xe có thể tăng tốc 0-100km/h trong 3 giây và đạt vận tốc tối đa 348 km/h.");
let car3 = new Car(4, "Mercedes-AMG GT Black Series P One Edition", "2,73 triệu USD", "", "tư nhân", "Germany", "<img src=\"Mercedes-AMG%20GT%20Black%20Series%20P%20One%20Edition.jpg\" style=\"width:100%\">", "Mercedes-AMG GT Black Series là chiếc siêu xe đua bản đường phố, một trong những sản phẩm được mong đợi tại\n" +
    "            Gumball 3000 lần này.\n" +
    "            Xe thuộc bản P One Edition, được sản xuất giới hạn 275 chiếc.\n" +
    "            Mẫu xe này được trang bị động cơ V8-Biturbo, sản sinh công suất tối đa 720 mã lực.");
let car4 = new Car(5, "Porsche Carrera GT", "450.000 USD", "", "đại gia Thái Lan", "America", "<img src=\"Porsche%20Carrera%20GT.jpg\" style=\"width:100%\">", "Chiếc Porsche Carrera GT đang góp mặt trong hành trình siêu xe lớn nhất thế giới mang ngoại thất màu đen với\n" +
    "            bộ tem chủ đạo màu cam nổi bật.\n" +
    "            Xe mang số thứ tự 85, trong tổng số hơn 100 siêu xe tham dự Gumball 3000 2024.\n" +
    "            Cung cấp “sức mạnh” cho Porsche Carrera GT là khối động cơ xăng V10, dung tích 5,7 lít, sản sinh công suất\n" +
    "            tối đa 603 mã lực, kết hợp cùng hộp số sàn, và trọng lượng chỉ hơn 1.361 kg.\n" +
    "            Với khối động cơ này, Carrera GT có thể tăng tốc từ 0-100km/h chỉ sau 3,9 giây.");
let car5 = new Car(6, "Porsche 911 GT3 RS", "500.000 USD", "", "ẩn danh người Hà Lan", "America", "<img src=\"Porsche%20911%20GT3%20RS%20thế%20hệ%20992.jpg\" style=\"width:100%\">", "Porsche 911 GT3 RS tham gia sự kiện thuộc thế hệ 992 đời mới nhất.\n" +
    "            Xe nổi bật với la-zăng đỏ, tem trang trí thân xe cùng màu, với loạt công nghệ vừa vận hành trên đường trường\n" +
    "            và đường đua.\n" +
    "            Phần đuôi xe có cánh gió cỡ lớn, có thể điều chỉnh thông qua nút bấm.\n" +
    "            Động cơ boxer 6 xi-lanh 4 lít hút khí tự nhiên, công suất 518 mã lực.\n" +
    "            Do nhiều người săn đón, khiến số lượng xe sản xuất không đủ, nhiều khách hàng trên thế giới phải chờ một\n" +
    "            năm.");
let car6 = new Car(7, "Jaguar F-Type SVR", "127.000 USD", " 2016-2020", "đại gia người Anh", "England", "<img src='Jaguar%20F-Type%20SVR.webp' style='width: 100%'>", "Jaguar F-Type SVR được trang bị động cơ V8, siêu nạp, dung tích 5.0 lít, sản sinh công suất tối đa 575 mã lực và mô-men xoắn cực đại 700 Nm. " +
                "Sức mạnh được truyền tới bánh thông qua hộp số tự động 8 cấp và hệ dẫn động 4 bánh. " +
                "Nhờ đó, Jaguar F-Type SVR có thể tăng tốc từ vị trí xuất phát lên 96 km/h trong 3,7 giây trước khi đạt vận tốc tối đa 323 km/h.");
let car7 = new Car(8, "Aston Martin DB12", "300.000 USD", "2023", "công ty tư nhân tại Anh", "England", "<img src='Aston%20Martin%20DB12.webp' style='width: 100%;'>", "DB12 trang bị động cơ 4.0 V8 tăng áp kép, công suất 671 mã lực, mô-men xoắn cực đại 800 Nm. " +
                "Mạnh hơn so với công suất của động cơ V8 trên DB11 chỉ 528 mã lực và mô-men xoắn 675 Nm, và mạnh hơn cả động cơ 5.2 V12 tăng áp kép, công suất 630 mã lực, mô-men xoắn 700 Nm.\n" +
                "\n" +
                "Aston Martin DB12 có khả năng tăng tốc từ 0-100 km/h trong 3.6 giây và đạt tốc độ tối đa 325 km/h nhờ sở hữu động cơ V8 Twin-Turbo, dung tích 4.0L, sản sinh công suất 680 mã lực, mô-men xoắn 800Nm cùng hộp số tự động 8 cấp.")
let car8 = new Car(9, "Ferrari 575M Maranello F1", "900.000 USD", "2002-2006", "đại gia Thái Lan", "America", "<img src='Ferrari%20575M%20Maranello%20F1.jpg' style='width: 100%'>", "Ferrari 575M Maranello được lắp động cơ phía trước, dẫn động cầu sau, cổ máy của xe là V12, dung tích 5.7 lít, hút khi tự nhiên, dung tích 5.748 cc, đường kính trong x hành trình piston : 89 mm × 77 mm, hệ thống truyền động van DOHC mỗi dãy, 4 van mỗi xi-lanh, dầu bôi trơn khô.\n" +
                "\n" +
                "Trái tim này sẽ sản sinh ra công suất tối đa 515 PS (379 kW; 508 mã lực) tại vòng tua máy 7.250 vòng/phút và mô-men xoắn cực đại: 588 Nm tại vòng tua 5.250 vòng/phút, xe có tốc độ tối đa 325 km/h, thời gian tăng tốc từ 0 đến 100 km/h là 4,2 giây, đua drag 400 m là 12,25 giây.")
arrCar.push(car0, car1, car2, car3, car4, car5, car6, car7, car8);


function displayCar(arr) {
    let tableData = "";
    for (let i in arr) {
        let result = "<form>"
        result += "<h3>" + `${arr[i].code}` + ". " + `${arr[i].name} `
            + `<button onclick=editCar(${i})><img src="repair-tool.png" style='width: 20px'></button>` + " "
            + `<button onclick=deleteCar(${i})><img src='delete.png' style='width: 20px'></button>` +" "
            +"</h3>"
        result += "<h9>" + "Giá trị :" + "</h9>" + ` ${arr[i].price}` + "<br>"
        result += "<h9>" + "Quyền sở hữu :" + "</h9>" + ` ${arr[i].ownership}` + "<br>"
        result += "<h9>" + "Thời gian sản xuất :" + "</h9>" + ` ${arr[i].time}` + "<br>"
        result += "<h9>" + "Khu vưc :" + "</h9>" + ` ${arr[i].address}` + "<br>" + "<br>"
        result += `${arr[i].image}` + "<br>" + "<br>"
        result += "<h9>" + "Thông tin chi tiết :" + "</h9>" + ` ${arr[i].description}` + "<hr>"

        result += "</form>"
        tableData += result;
    }
    document.getElementById("result").innerHTML = tableData
}

function deleteCar(index) {
    let isConfirm = confirm(`Bạn có thực sự muốn xóa thông tin xe ${arrCar[index].name} hay không?`)
    if (isConfirm) {
        arrCar.splice(index, 1)
    }
    displayCar(arrCar)
}

function editCar(index) {
    let edit = prompt("Nhập thông tin muốn sửa");
    switch (edit) {
        case "tên" :
            let str1 = prompt("Nhập tên xe thay thế");
            arrCar[index].setName(str1);
            let name1 = arrCar[index].getName();
            arrCar[index].name = name1;
            break;
        case "giá trị" :
            let str2 = prompt("Nhập giá thay thế");
            arrCar[index].setPrice(str2);
            let price1 = arrCar[index].getPrice();
            arrCar[index].price = price1;
            break;
        case "thời gian sản xuất":
            let str3 = prompt("Nhập thời gian thay thế ");
            arrCar[index].setTime(str3);
            let time1 = arrCar[index].getTime();
            arrCar[index].time = time1;
            break;
        case "quyền sở hữu" :
            let str4 = prompt("Nhập thông tin chủ sở hữu thay thế ");
            arrCar[index].setOwnership(str4);
            let owner1 = arrCar[index].getOwnership();
            arrCar[index].ownership = owner1;
            break;
        case "khu vực" :
            let str5 = prompt("Nhập địa chỉ thay thế");
            arrCar[index].setAddress(str5);
            let address1 = arrCar[index].getAddress();
            arrCar[index].address = address1;
            break;
        case "thông tin" :
            let str6 = prompt("Nhập thông tin thay thế");
            arrCar[index].setDescription(str6);
            let des1 = arrCar[index].getDescription();
            arrCar[index].description = des1;
            break;
        default:
            alert("Không có thông tin nào cần chỉnh sửa");
    }
    displayCar(arrCar);
}

function findCar() {
    let searchName = document.getElementById('find').value;
    let findCar = arrCar.filter(function (car) {
        return car.name.includes(searchName)
    });
    displayCar(findCar);
}


displayCar(arrCar);
