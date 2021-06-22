import React from 'react';
import PinkBtn from '../PinkBtn';
import TransparentBnt from '../TransparentBnt';
import WhiteBtn from '../WhiteBtn';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='cover'>
        <div className='footer-items'>
          <div className='footer-item'>
            <h1>contact us</h1>
            <ul>
              <li>
                <a href='#'>address</a>
              </li>
              <li>
                <a href=''>phone contact</a>
              </li>
              <li>
                <a href=''>opening time</a>
              </li>
              <li>
                <a href=''>
                  <svg
                    width='13'
                    height='28'
                    viewBox='0 0 13 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.38772 27.1644L3.32462 14.8611L0.0713794 14.8778L0.0486593 10.4481L3.3019 10.4314L3.28249 6.64779C3.26724 3.67461 5.17494 0.934395 9.60294 0.911684C11.3958 0.902489 12.7224 1.06756 12.7224 1.06756L12.6391 5.20474C12.6391 5.20474 11.287 5.19852 9.81166 5.20608C8.21485 5.21427 7.9628 5.95145 7.96906 7.17281L7.98565 10.4074L12.7926 10.3827L12.6062 14.8135L8.00837 14.8371L8.07147 27.1404L3.38772 27.1644Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a href=''>
                  <svg
                    width='27'
                    height='27'
                    viewBox='0 0 27 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M8.17794 0.782055C9.52867 0.719873 9.95934 0.706055 13.4001 0.706055C16.8408 0.706055 17.2715 0.721024 18.621 0.782055C19.9706 0.843085 20.8918 1.05842 21.6979 1.37048C22.5419 1.68945 23.3077 2.18805 23.941 2.8329C24.5859 3.46508 25.0833 4.22969 25.4012 5.0749C25.7144 5.88096 25.9285 6.80218 25.9907 8.14945C26.0529 9.50248 26.0667 9.93315 26.0667 13.3727C26.0667 16.8134 26.0518 17.2441 25.9907 18.5948C25.9297 19.9421 25.7144 20.8633 25.4012 21.6694C25.0833 22.5147 24.5851 23.2806 23.941 23.9137C23.3077 24.5585 22.5419 25.056 21.6979 25.3738C20.8918 25.687 19.9706 25.9012 18.6233 25.9634C17.2715 26.0256 16.8408 26.0394 13.4001 26.0394C9.95934 26.0394 9.52867 26.0244 8.17794 25.9634C6.83067 25.9024 5.90946 25.687 5.1034 25.3738C4.25809 25.056 3.49222 24.5577 2.8591 23.9137C2.21468 23.2811 1.716 22.5156 1.39782 21.6705C1.08576 20.8645 0.87158 19.9433 0.809398 18.596C0.747217 17.243 0.733398 16.8123 0.733398 13.3727C0.733398 9.93199 0.748368 9.50133 0.809398 8.15175C0.870429 6.80218 1.08576 5.88096 1.39782 5.0749C1.71647 4.22978 2.21554 3.46429 2.86025 2.83175C3.49248 2.18748 4.25758 1.68881 5.10225 1.37048C5.90831 1.05842 6.82952 0.844236 8.17679 0.782055H8.17794ZM18.5185 3.06205C17.1828 3.00102 16.7821 2.98836 13.4001 2.98836C10.0181 2.98836 9.61734 3.00102 8.28158 3.06205C7.046 3.11848 6.37582 3.3246 5.92903 3.49848C5.33831 3.72878 4.9157 4.00169 4.47237 4.44502C4.05212 4.85387 3.7287 5.35159 3.52582 5.90169C3.35194 6.34848 3.14582 7.01866 3.0894 8.25424C3.02837 9.58999 3.0157 9.99072 3.0157 13.3727C3.0157 16.7547 3.02837 17.1554 3.0894 18.4912C3.14582 19.7268 3.35194 20.397 3.52582 20.8438C3.72849 21.393 4.05207 21.8916 4.47237 22.3004C4.88116 22.7207 5.37976 23.0443 5.92903 23.247C6.37582 23.4208 7.046 23.627 8.28158 23.6834C9.61734 23.7444 10.0169 23.7571 13.4001 23.7571C16.7832 23.7571 17.1828 23.7444 18.5185 23.6834C19.7541 23.627 20.4243 23.4208 20.8711 23.247C21.4618 23.0167 21.8844 22.7438 22.3278 22.3004C22.7481 21.8916 23.0716 21.393 23.2743 20.8438C23.4482 20.397 23.6543 19.7268 23.7107 18.4912C23.7718 17.1554 23.7844 16.7547 23.7844 13.3727C23.7844 9.99072 23.7718 9.58999 23.7107 8.25424C23.6543 7.01866 23.4482 6.34848 23.2743 5.90169C23.044 5.31096 22.7711 4.88836 22.3278 4.44502C21.9189 4.0248 21.4212 3.70139 20.8711 3.49848C20.4243 3.3246 19.7541 3.11848 18.5185 3.06205ZM11.7822 17.2775C12.6857 17.6536 13.6918 17.7044 14.6286 17.4211C15.5655 17.1379 16.3749 16.5381 16.9186 15.7244C17.4624 14.9106 17.7068 13.9334 17.6101 12.9594C17.5133 11.9855 17.0815 11.0754 16.3882 10.3845C15.9463 9.94291 15.412 9.60475 14.8237 9.39441C14.2354 9.18406 13.6078 9.10677 12.9861 9.1681C12.3643 9.22942 11.7639 9.42783 11.2281 9.74905C10.6922 10.0703 10.2343 10.5063 9.88714 11.0258C9.54003 11.5452 9.3124 12.1352 9.22066 12.7532C9.12891 13.3711 9.17533 14.0018 9.35657 14.5997C9.5378 15.1976 9.84935 15.7478 10.2688 16.2109C10.6882 16.6739 11.2051 17.0382 11.7822 17.2775ZM8.79631 8.76896C9.40088 8.16439 10.1186 7.68482 10.9085 7.35762C11.6984 7.03043 12.5451 6.86202 13.4001 6.86202C14.2551 6.86202 15.1017 7.03043 15.8916 7.35762C16.6815 7.68481 17.3992 8.16439 18.0038 8.76896C18.6084 9.37354 19.088 10.0913 19.4152 10.8812C19.7424 11.6711 19.9108 12.5177 19.9108 13.3727C19.9108 14.2277 19.7424 15.0743 19.4152 15.8643C19.088 16.6542 18.6084 17.3719 18.0038 17.9765C16.7828 19.1975 15.1268 19.8834 13.4001 19.8834C11.6733 19.8834 10.0173 19.1975 8.79631 17.9765C7.57531 16.7555 6.88937 15.0995 6.88937 13.3727C6.88937 11.646 7.57531 9.98996 8.79631 8.76896ZM21.3547 7.83163C21.5045 7.6903 21.6245 7.52035 21.7074 7.33184C21.7904 7.14333 21.8347 6.94009 21.8377 6.73416C21.8407 6.52822 21.8024 6.32378 21.7249 6.13293C21.6475 5.94208 21.5326 5.7687 21.3869 5.62307C21.2413 5.47744 21.0679 5.3625 20.8771 5.28507C20.6862 5.20765 20.4818 5.1693 20.2758 5.1723C20.0699 5.1753 19.8667 5.2196 19.6782 5.30255C19.4896 5.38551 19.3197 5.50545 19.1784 5.65527C18.9035 5.94663 18.753 6.33365 18.7589 6.73416C18.7647 7.13466 18.9264 7.51713 19.2096 7.80036C19.4929 8.08359 19.8753 8.24529 20.2758 8.25113C20.6763 8.25696 21.0634 8.10648 21.3547 7.83163Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a href=''>
                  <svg
                    width='34'
                    height='24'
                    viewBox='0 0 34 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.0698 3.99654C32.8806 3.29359 32.5101 2.65266 31.9953 2.13791C31.4806 1.62316 30.8396 1.25263 30.1367 1.06342C27.5479 0.362793 17.1454 0.362793 17.1454 0.362793C17.1454 0.362793 6.74293 0.362793 4.15418 1.06342C3.45122 1.25263 2.8103 1.62316 2.29554 2.13791C1.78079 2.65266 1.41026 3.29359 1.22105 3.99654C0.737673 6.63667 0.503103 9.31633 0.520425 12.0003C0.503103 14.6843 0.737673 17.3639 1.22105 20.004C1.41026 20.707 1.78079 21.3479 2.29554 21.8627C2.8103 22.3774 3.45122 22.748 4.15418 22.9372C6.74293 23.6378 17.1454 23.6378 17.1454 23.6378C17.1454 23.6378 27.5479 23.6378 30.1367 22.9372C30.8396 22.748 31.4806 22.3774 31.9953 21.8627C32.5101 21.3479 32.8806 20.707 33.0698 20.004C33.5532 17.3639 33.7878 14.6843 33.7704 12.0003C33.7878 9.31633 33.5532 6.63667 33.0698 3.99654ZM13.8204 16.9878V7.01279L22.4536 12.0003L13.8204 16.9878Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h1>quick links</h1>
            <ul>
              <li>
                <a href=''>home</a>
              </li>
              <li>
                <a href=''>dance classes</a>
              </li>
              <li>
                <a href=''>prices</a>
              </li>
              <li>
                <a href=''>discount</a>
              </li>
              <li>
                <a href=''>contact</a>
              </li>
            </ul>
          </div>
          <div className='footer-item newsletters'>
            <h1>newsletters</h1>
            <ul>
              <li>
                <TransparentBnt text='Your email' />
              </li>
              <li>
                <WhiteBtn text='Sign up' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;