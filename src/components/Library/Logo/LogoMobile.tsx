import React from 'react';

import { Wrapper } from './styles';

const LogoMobile: React.FC = () => (
  <Wrapper viewBox="0 0 109 27" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4277 1.97461L18.8242 5.93945C18.8424 6.12174 18.8516 6.26758 18.8516 6.37695C18.8516 6.65951 18.7285 6.80078 18.4824 6.80078C18.2546 6.80078 18.0632 6.64128 17.9082 6.32227C17.1973 4.85482 16.2585 3.66081 15.0918 2.74023C13.9342 1.81966 12.599 1.35938 11.0859 1.35938C9.13542 1.35938 7.60872 2.17513 6.50586 3.80664C5.41211 5.43815 4.86523 7.36589 4.86523 9.58984C4.86523 12.069 5.47135 14.1016 6.68359 15.6875C7.90495 17.2643 9.3405 18.0527 10.9902 18.0527C11.6921 18.0527 12.403 17.8932 13.123 17.5742C13.8522 17.2461 14.3171 16.8997 14.5176 16.5352C14.7272 16.1615 14.832 15.6283 14.832 14.9355C14.832 13.4043 14.7682 12.4518 14.6406 12.0781C14.5221 11.6953 14.3216 11.431 14.0391 11.2852C13.7565 11.1393 13.1823 11.0163 12.3164 10.916C11.9792 10.8796 11.8105 10.7474 11.8105 10.5195C11.8105 10.2552 11.9701 10.123 12.2891 10.123H14.3535L20.6562 9.97266C20.9388 9.97266 21.0801 10.0911 21.0801 10.3281C21.0801 10.4648 21.0254 10.5605 20.916 10.6152C20.8066 10.6608 20.4238 10.752 19.7676 10.8887C19.2754 10.998 18.9609 11.1621 18.8242 11.3809C18.6875 11.5996 18.5827 12.9759 18.5098 15.5098C18.4915 16.0749 18.4733 16.3939 18.4551 16.4668C18.4368 16.5306 17.8945 16.8405 16.8281 17.3965C15.7708 17.9434 14.6771 18.3535 13.5469 18.627C12.4258 18.8913 11.3092 19.0234 10.1973 19.0234C8.31966 19.0234 6.64258 18.6543 5.16602 17.916C3.68945 17.1777 2.5 16.1387 1.59766 14.7988C0.695312 13.4499 0.244141 11.8457 0.244141 9.98633C0.244141 7.36133 1.14648 5.09635 2.95117 3.19141C4.76497 1.27734 7.24414 0.320312 10.3887 0.320312C11.5007 0.320312 12.5033 0.457031 13.3965 0.730469C14.2988 0.994792 15.3197 1.3776 16.459 1.87891C16.6868 1.97917 16.8828 2.0293 17.0469 2.0293C17.2292 2.0293 17.3704 1.89714 17.4707 1.63281C17.5983 1.28646 17.7669 1.11328 17.9766 1.11328C18.2227 1.11328 18.373 1.40039 18.4277 1.97461Z" />
    <path d="M34.3773 12.4609C34.3773 14.138 33.753 15.6283 32.5043 16.9316C31.2556 18.235 29.6697 18.8867 27.7465 18.8867C25.9783 18.8867 24.4926 18.3398 23.2895 17.2461C22.0863 16.1523 21.4848 14.694 21.4848 12.8711C21.4848 11.0208 22.1182 9.52604 23.3852 8.38672C24.6612 7.23828 26.2107 6.66406 28.0336 6.66406C29.8839 6.66406 31.4014 7.20638 32.5863 8.29102C33.7803 9.36654 34.3773 10.7565 34.3773 12.4609ZM30.6039 13.3906C30.6039 11.8958 30.3533 10.5469 29.852 9.34375C29.3598 8.13151 28.6488 7.52539 27.7191 7.52539C26.8988 7.52539 26.2654 7.94922 25.8188 8.79688C25.3721 9.63542 25.1488 10.8158 25.1488 12.3379C25.1488 13.9967 25.3995 15.3594 25.9008 16.4258C26.4112 17.4831 27.1085 18.0117 27.9926 18.0117C28.8585 18.0117 29.5102 17.5879 29.9477 16.7402C30.3852 15.8926 30.6039 14.776 30.6039 13.3906Z" />
    <path d="M39.4715 9.38477C39.9272 8.46419 40.4513 7.77604 41.0438 7.32031C41.6362 6.86458 42.297 6.63672 43.0262 6.63672C43.7189 6.63672 44.2703 6.83724 44.6805 7.23828C45.0997 7.63932 45.3094 8.14062 45.3094 8.74219C45.3094 9.21615 45.159 9.62175 44.8582 9.95898C44.5665 10.2871 44.2065 10.4512 43.7781 10.4512C43.4591 10.4512 43.1948 10.3691 42.9852 10.2051C42.7755 10.041 42.5522 9.74935 42.3152 9.33008C41.9871 8.72852 41.7 8.42773 41.4539 8.42773C41.1167 8.42773 40.7339 8.76953 40.3055 9.45312C39.8771 10.1367 39.6629 11.4629 39.6629 13.4316C39.6629 15.9199 39.7449 17.3053 39.909 17.5879C40.0822 17.8613 40.4559 17.998 41.0301 17.998C41.5314 17.998 41.782 18.1348 41.782 18.4082C41.782 18.6634 41.5359 18.791 41.0438 18.791C40.7703 18.791 40.3738 18.7637 39.8543 18.709C39.3803 18.6634 38.9337 18.6406 38.5145 18.6406C37.6121 18.6406 36.7189 18.6725 35.8348 18.7363C35.4611 18.7637 35.2423 18.7773 35.1785 18.7773C34.7957 18.7773 34.6043 18.6361 34.6043 18.3535C34.6043 18.1074 34.8276 17.9753 35.2742 17.957C35.7117 17.9388 36.0171 17.8385 36.1902 17.6562C36.3634 17.4648 36.45 17.0547 36.45 16.4258L36.5047 13.0078C36.5047 12.3151 36.4773 11.4538 36.4227 10.4238C36.368 9.39388 36.3178 8.7832 36.2723 8.5918C36.2267 8.39128 36.1082 8.21354 35.9168 8.05859C35.7345 7.90365 35.4839 7.8125 35.1648 7.78516C34.8367 7.7487 34.6271 7.70768 34.5359 7.66211C34.4539 7.60742 34.4129 7.5026 34.4129 7.34766C34.4129 7.10156 34.6408 6.97396 35.0965 6.96484C35.935 6.95573 37.3615 6.84635 39.3758 6.63672L39.4715 9.38477Z" />
    <path d="M54.6008 7.88086C55.6763 6.93294 56.6151 6.45898 57.4172 6.45898C57.9549 6.45898 58.3924 6.61393 58.7297 6.92383C59.076 7.23372 59.2492 7.58919 59.2492 7.99023C59.2492 8.32747 59.1307 8.63737 58.8937 8.91992C58.6568 9.19336 58.3332 9.33008 57.923 9.33008C57.3488 9.33008 56.9341 9.02018 56.6789 8.40039C56.5057 7.99023 56.3371 7.78516 56.173 7.78516C55.9816 7.78516 55.6216 8.00391 55.093 8.44141C55.576 9.17057 55.8176 9.95443 55.8176 10.793C55.8176 11.6497 55.5715 12.4382 55.0793 13.1582C54.5871 13.8691 53.9901 14.375 53.2883 14.6758C52.5956 14.9766 51.6066 15.1862 50.3215 15.3047C49.2186 15.4049 48.5487 15.5736 48.3117 15.8105C48.0656 16.0566 47.9426 16.3301 47.9426 16.6309C47.9426 16.9954 48.1932 17.2324 48.6945 17.3418C49.1867 17.4512 50.5493 17.5378 52.7824 17.6016C56.2095 17.7109 57.923 18.8366 57.923 20.9785C57.923 22.4368 57.2805 23.6445 55.9953 24.6016C54.7193 25.5677 52.787 26.0508 50.1984 26.0508C48.2479 26.0508 46.8397 25.7637 45.9738 25.1895C45.1079 24.6243 44.675 23.959 44.675 23.1934C44.675 22.3822 45.0259 21.694 45.7277 21.1289C46.4387 20.5729 47.5005 20.1354 48.9133 19.8164C47.8378 19.707 47.0311 19.4701 46.4934 19.1055C45.9556 18.75 45.6867 18.2624 45.6867 17.6426C45.6867 16.9863 45.9374 16.4349 46.4387 15.9883C46.94 15.5417 47.6874 15.1999 48.6809 14.9629C47.6418 14.6439 46.8579 14.179 46.3293 13.5684C45.8098 12.9577 45.55 12.1966 45.55 11.2852C45.55 9.96354 46.0786 8.85612 47.1359 7.96289C48.1932 7.06055 49.4966 6.60938 51.0461 6.60938C51.7844 6.60938 52.4497 6.71419 53.0422 6.92383C53.6346 7.13346 54.1542 7.45247 54.6008 7.88086ZM48.8312 10.7383C48.8312 11.9141 49.0272 12.8255 49.4191 13.4727C49.8202 14.1107 50.2941 14.4297 50.841 14.4297C51.4061 14.4297 51.8299 14.1562 52.1125 13.6094C52.3951 13.0534 52.5363 12.224 52.5363 11.1211C52.5363 9.95443 52.3632 9.03841 52.0168 8.37305C51.6796 7.70768 51.2421 7.375 50.7043 7.375C50.1574 7.375 49.7062 7.67578 49.3508 8.27734C49.0044 8.87891 48.8312 9.69922 48.8312 10.7383ZM47.3684 22.8379C47.3684 23.4577 47.6737 24 48.2844 24.4648C48.9042 24.9297 49.7746 25.1621 50.8957 25.1621C52.2538 25.1621 53.3794 24.8522 54.2727 24.2324C55.175 23.6126 55.6262 22.8789 55.6262 22.0312C55.6262 21.3477 55.2661 20.8418 54.5461 20.5137C53.826 20.1947 52.9009 20.0352 51.7707 20.0352C50.4309 20.0352 49.3599 20.2995 48.5578 20.8281C47.7648 21.3659 47.3684 22.0358 47.3684 22.8379Z" />
    <path d="M62.8531 12.4062C62.844 12.6706 62.8395 12.862 62.8395 12.9805C62.8395 14.2747 63.1539 15.373 63.7828 16.2754C64.4208 17.1686 65.2776 17.6152 66.3531 17.6152C67.456 17.6152 68.5406 17.1367 69.607 16.1797C69.8258 15.9883 69.9807 15.8926 70.0719 15.8926C70.3089 15.8926 70.4273 16.0202 70.4273 16.2754C70.4273 16.4759 70.1539 16.8359 69.607 17.3555C69.0602 17.875 68.3902 18.2669 67.5973 18.5312C66.8043 18.7956 65.984 18.9277 65.1363 18.9277C63.277 18.9277 61.8186 18.3626 60.7613 17.2324C59.7132 16.0931 59.1891 14.7533 59.1891 13.2129C59.1891 11.3626 59.7906 9.81315 60.9938 8.56445C62.206 7.30664 63.7145 6.67773 65.5191 6.67773C67.2145 6.67773 68.5042 7.2474 69.3883 8.38672C70.2815 9.52604 70.7281 10.6107 70.7281 11.6406C70.7281 11.9688 70.6415 12.1647 70.4684 12.2285C70.2952 12.2923 69.7346 12.3242 68.7867 12.3242L62.8531 12.4062ZM62.9352 11.4082C64.2841 11.4264 65.0634 11.4355 65.273 11.4355C66.303 11.4355 66.9319 11.3626 67.1598 11.2168C67.3967 11.071 67.5152 10.7747 67.5152 10.3281C67.5152 9.58073 67.301 8.91992 66.8727 8.3457C66.4443 7.77148 65.9339 7.48438 65.3414 7.48438C63.9378 7.48438 63.1357 8.79232 62.9352 11.4082Z" />
    <path d="M84.1211 12.4609C84.1211 14.138 83.4967 15.6283 82.248 16.9316C80.9994 18.235 79.4134 18.8867 77.4902 18.8867C75.722 18.8867 74.2363 18.3398 73.0332 17.2461C71.8301 16.1523 71.2285 14.694 71.2285 12.8711C71.2285 11.0208 71.862 9.52604 73.1289 8.38672C74.4049 7.23828 75.9544 6.66406 77.7773 6.66406C79.6276 6.66406 81.1452 7.20638 82.3301 8.29102C83.5241 9.36654 84.1211 10.7565 84.1211 12.4609ZM80.3477 13.3906C80.3477 11.8958 80.097 10.5469 79.5957 9.34375C79.1035 8.13151 78.3926 7.52539 77.4629 7.52539C76.6426 7.52539 76.0091 7.94922 75.5625 8.79688C75.1159 9.63542 74.8926 10.8158 74.8926 12.3379C74.8926 13.9967 75.1432 15.3594 75.6445 16.4258C76.1549 17.4831 76.8522 18.0117 77.7363 18.0117C78.6022 18.0117 79.2539 17.5879 79.6914 16.7402C80.1289 15.8926 80.3477 14.776 80.3477 13.3906Z" />
    <path d="M89.0648 6.89648C89.1104 7.83529 89.1332 9.11589 89.1332 10.7383C89.1332 13.1992 89.156 14.776 89.2016 15.4688C89.2471 16.1523 89.4249 16.6673 89.7348 17.0137C90.0538 17.36 90.4138 17.5332 90.8148 17.5332C91.2888 17.5332 91.7673 17.3555 92.2504 17C92.7426 16.6445 93.1026 16.1797 93.3305 15.6055C93.5674 15.0312 93.6859 14.0924 93.6859 12.7891L93.7133 9.76758C93.7133 8.9655 93.6677 8.43685 93.5766 8.18164C93.4945 7.92643 93.2029 7.78971 92.7016 7.77148C92.1547 7.74414 91.8812 7.60286 91.8812 7.34766C91.8812 7.19271 91.9451 7.09701 92.0727 7.06055C92.2094 7.01497 92.5603 6.99219 93.1254 6.99219C94.3923 6.99219 95.5727 6.96029 96.6664 6.89648C96.7029 7.25195 96.7211 9.19792 96.7211 12.7344C96.7211 15.5781 96.7484 17.1322 96.8031 17.3965C96.8578 17.6517 97.154 17.8021 97.6918 17.8477C98.0108 17.8841 98.1703 18.0163 98.1703 18.2441C98.1703 18.5085 97.988 18.6406 97.6234 18.6406C97.5505 18.6406 97.4366 18.6361 97.2816 18.627C97.0264 18.6087 96.7256 18.5996 96.3793 18.5996C95.1671 18.5996 94.4971 18.6042 94.3695 18.6133C94.2237 18.6224 94.1006 18.627 94.0004 18.627C93.8272 18.627 93.7178 18.5996 93.6723 18.5449C93.6358 18.4811 93.6176 18.3034 93.6176 18.0117C93.6176 17.5378 93.6495 17.0592 93.7133 16.5762C93.0844 17.3418 92.419 17.916 91.7172 18.2988C91.0245 18.6816 90.2953 18.873 89.5297 18.873C87.2055 18.873 86.0434 17.5697 86.0434 14.9629V10.7383C86.0434 9.27995 85.9887 8.42773 85.8793 8.18164C85.779 7.92643 85.5056 7.76693 85.059 7.70312C84.6579 7.64844 84.4574 7.52995 84.4574 7.34766C84.4574 7.10156 84.6352 6.97852 84.9906 6.97852C87.4333 6.97852 88.7914 6.95117 89.0648 6.89648Z" />
    <path d="M108.132 14.8262C108.132 15.4824 107.958 16.1204 107.612 16.7402C107.275 17.36 106.76 17.875 106.067 18.2852C105.384 18.6862 104.582 18.8867 103.661 18.8867C102.512 18.8867 101.542 18.6497 100.749 18.1758C100.402 17.9753 100.179 17.875 100.079 17.875C99.9604 17.875 99.8693 17.9525 99.8055 18.1074C99.6596 18.472 99.4865 18.6543 99.2859 18.6543C99.1674 18.6543 99.0809 18.6087 99.0262 18.5176C98.9806 18.4264 98.9396 18.0208 98.9031 17.3008C98.8758 16.5716 98.8621 15.7103 98.8621 14.7168C98.8621 14.334 98.9715 14.1426 99.1902 14.1426C99.409 14.1426 99.6414 14.4251 99.8875 14.9902C100.762 17.041 101.957 18.0664 103.47 18.0664C103.998 18.0664 104.445 17.9297 104.809 17.6562C105.183 17.3828 105.37 16.9863 105.37 16.4668C105.37 16.0293 105.197 15.6556 104.85 15.3457C104.513 15.0267 103.861 14.6302 102.895 14.1562C101.437 13.4362 100.439 12.8073 99.9012 12.2695C99.3543 11.7318 99.0809 11.0163 99.0809 10.123C99.0809 9.0931 99.4773 8.25911 100.27 7.62109C101.063 6.97396 102.039 6.65039 103.196 6.65039C104.117 6.65039 105.051 6.92383 105.999 7.4707C106.126 7.54362 106.231 7.58008 106.313 7.58008C106.432 7.58008 106.523 7.47982 106.587 7.2793C106.678 7.02409 106.81 6.89648 106.983 6.89648C107.102 6.89648 107.184 6.9375 107.229 7.01953C107.275 7.10156 107.339 7.52995 107.421 8.30469C107.503 9.07031 107.544 9.70833 107.544 10.2188C107.544 10.5742 107.439 10.752 107.229 10.752C107.011 10.752 106.787 10.4967 106.559 9.98633C105.785 8.29102 104.668 7.44336 103.21 7.44336C102.681 7.44336 102.253 7.57552 101.925 7.83984C101.596 8.10417 101.432 8.38672 101.432 8.6875C101.432 9.07031 101.642 9.42122 102.061 9.74023C102.481 10.0684 103.296 10.5104 104.509 11.0664C105.548 11.5404 106.268 11.9095 106.669 12.1738C107.079 12.429 107.425 12.8027 107.708 13.2949C107.99 13.778 108.132 14.2884 108.132 14.8262Z" />
  </Wrapper>
);

export default LogoMobile;