import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const AppDownload: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/封余时刻.apk';
    // link.href = "https://zyxg-1300598019.cos.ap-nanjing.myqcloud.com/封余时刻.apk"
    link.download = '封余时刻.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '80px' }}>
      

      {/* 用户信息 */}
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#e8e8e8', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <span style={{ color: '#999', fontSize: '14px' }}>18**</span>
          </div>
        </div>
      </div>

      {/* 应用图标和信息 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 16px' }}>
        {/* Android图标 */}
        <div style={{ 
          width: '120px', 
          height: '120px', 
          // backgroundColor: '#52c41a', 
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          // boxShadow: '0 4px 20px rgba(82, 196, 26, 0.3)'
        }}>
          {/* <svg viewBox="0 0 100 100" style={{ width: '60px', height: '60px' }}>
            <circle cx="35" cy="40" r="8" fill="#ffffff" />
            <circle cx="65" cy="40" r="8" fill="#ffffff" />
            <circle cx="35" cy="40" r="3" fill="#52c41a" />
            <circle cx="65" cy="40" r="3" fill="#52c41a" />
            <path d="M25 55 Q50 75 75 55 L70 70 Q50 85 30 70 Z" fill="#ffffff" />
          </svg> */}
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='android' style={{width: '100%', lineHeight: 50, marginTop: 25}}></img>
        </div>

        {/* 应用名称 */}
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
          封余时刻.apk
        </div>

        {/* 系统类型 */}
        <div style={{ fontSize: '14px', color: '#999' }}>
          <span>Android</span>
          <span style={{ margin: '0 8px', color: '#ddd' }}>|</span>
        </div>
      </div>

      {/* 下载按钮 */}
      <div style={{ padding: '20px 32px' }}>
        <Button 
          type="primary" 
          size="large" 
          block 
          icon={<DownloadOutlined />}
          onClick={handleDownload}
          style={{ 
            height: '52px', 
            borderRadius: '26px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#1890ff',
            borderColor: '#1890ff'
          }}
        >
          下载 (84.5 M)
        </Button>
      </div>

      {/* 反诈提示 */}
      <div style={{ 
        margin: '0 16px', 
        padding: '16px', 
        backgroundColor: '#fffbe6',
        borderRadius: '8px',
        border: '1px solid #ffe58f'
      }}>
        <div style={{ fontSize: '13px', color: '#d48806', textAlign: 'center', lineHeight: '1.6' }}>
          反诈提示：刷单兼职，冒充公检法，共享手机屏幕，裸聊敲诈，赌博等都是诈骗，请立即举报
        </div>
      </div>

     
    </div>
  );
};

export default AppDownload;