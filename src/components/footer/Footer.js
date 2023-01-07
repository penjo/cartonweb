import React from 'react';
import Logo from "../../assets/images/logo";
import { IconBxPhoneCall,IconBxMap,IconBxMailSend } from '../../icon';
const Footer = () => {
  return (
    <div className='tp_footer'>
        <div className='footer_block1'>
            <Logo/>
          <ul>
            <li><a href='tel:0977412733'><IconBxPhoneCall/> 0977412733</a></li>
            <li><a href="https://goo.gl/maps/qemX9ULBzkgwqnPK8"><IconBxMap/> 93 Cộng Hòa, P4, Tân Bình, TP Hồ Chí Minh</a></li>
            <li><a href='mailto:inanbaobithienphat@gmail.com?'><IconBxMailSend/> inanbaobithienphat@gmail.com</a></li>
          </ul>
        </div>
      <div className='footer_block2'>
            <h1>Chính sách</h1>
            <ul className='footer_list'>
              <li>Chính Sách Mua Hàng</li>
              <li>Chính Sách Thanh Toán</li>
              <li>Chính Sách Vận Chuyển</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Chính Sách Hoàn Trả</li>
            </ul>
        </div>
        <div className='footer_block2'>
            <h1>Danh Mục</h1>
            <ul className='footer_list'>
              <li>Thùng Carton</li>
              <li>Đặt Làm Theo Yêu Cầu</li>
            </ul>
        </div>
        <div className='footer_block2'>
            <h1>Hỗ Trợ Khách Hàng</h1>
            <ul className='footer_list'>
              <li>Liên Hệ</li>
              <li>Các Câu Hỏi Thường Gặp</li>
            </ul>
        </div>
    </div> 
  )
}

export default Footer;