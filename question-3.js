// Câu 3: Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:

// Lưu ý: Một số đặc điểm của kích thước:
// 1.	Các định dạng: _100x, _x100, _100x100
// 2.	Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg

const replaceSize = (urls) => {
  const size = ["_100x", "_x100", "_100x100"];
  const rgx = /(_\d+x|_\d+x\d+)?.(?:png|jpg|jpeg)\?/;
  const formats = [".png?", ".jpg?", ".jpeg?"];

  const newUrls = [];
  for (let i = 0; i < size.length; i++) {
    for (let j = 0; j < urls.length; j++) {
      const oldUrl = urls[j];
      const format = formats.filter((x) => {
        if (oldUrl.includes(x)) return x;
      });
      oldUrl.includes;

      const newUrl = oldUrl.replace(rgx, size[i] + format[0]);
      newUrls.push(newUrl);
    }
  }
  return newUrls;
};

console.log(
  "output:",
  replaceSize([
    "https://cdn.shopify.com/e.jpg?v=15",
    "https://cdn.shopify.com/e_100x200.jpg?v=15",
    "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15"
  ])
);
