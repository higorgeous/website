import React from 'react';

import { Wrapper } from './styles';

const LogoTablet: React.FC = () => (
  <Wrapper viewBox="0 0 277 26" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4277 1.6543L18.8242 5.61914C18.8424 5.80143 18.8516 5.94727 18.8516 6.05664C18.8516 6.33919 18.7285 6.48047 18.4824 6.48047C18.2546 6.48047 18.0632 6.32096 17.9082 6.00195C17.1973 4.53451 16.2585 3.34049 15.0918 2.41992C13.9342 1.49935 12.599 1.03906 11.0859 1.03906C9.13542 1.03906 7.60872 1.85482 6.50586 3.48633C5.41211 5.11784 4.86523 7.04557 4.86523 9.26953C4.86523 11.7487 5.47135 13.7812 6.68359 15.3672C7.90495 16.944 9.34049 17.7324 10.9902 17.7324C11.6921 17.7324 12.403 17.5729 13.123 17.2539C13.8522 16.9258 14.3171 16.5794 14.5176 16.2148C14.7272 15.8411 14.832 15.3079 14.832 14.6152C14.832 13.084 14.7682 12.1315 14.6406 11.7578C14.5221 11.375 14.3216 11.1107 14.0391 10.9648C13.7565 10.819 13.1823 10.696 12.3164 10.5957C11.9792 10.5592 11.8105 10.4271 11.8105 10.1992C11.8105 9.9349 11.9701 9.80273 12.2891 9.80273H14.3535L20.6562 9.65234C20.9388 9.65234 21.0801 9.77083 21.0801 10.0078C21.0801 10.1445 21.0254 10.2402 20.916 10.2949C20.8066 10.3405 20.4238 10.4316 19.7676 10.5684C19.2754 10.6777 18.9609 10.8418 18.8242 11.0605C18.6875 11.2793 18.5827 12.6556 18.5098 15.1895C18.4915 15.7546 18.4733 16.0736 18.4551 16.1465C18.4368 16.2103 17.8945 16.5202 16.8281 17.0762C15.7708 17.623 14.6771 18.0332 13.5469 18.3066C12.4258 18.571 11.3092 18.7031 10.1973 18.7031C8.31966 18.7031 6.64258 18.334 5.16602 17.5957C3.68945 16.8574 2.5 15.8184 1.59766 14.4785C0.695312 13.1296 0.244141 11.5254 0.244141 9.66602C0.244141 7.04102 1.14648 4.77604 2.95117 2.87109C4.76497 0.957031 7.24414 0 10.3887 0C11.5007 0 12.5033 0.136719 13.3965 0.410156C14.2988 0.674479 15.3197 1.05729 16.459 1.55859C16.6868 1.65885 16.8828 1.70898 17.0469 1.70898C17.2292 1.70898 17.3704 1.57682 17.4707 1.3125C17.5983 0.966146 17.7669 0.792969 17.9766 0.792969C18.2227 0.792969 18.373 1.08008 18.4277 1.6543Z" />
    <path d="M34.3773 12.1406C34.3773 13.8177 33.753 15.3079 32.5043 16.6113C31.2556 17.9147 29.6697 18.5664 27.7465 18.5664C25.9783 18.5664 24.4926 18.0195 23.2895 16.9258C22.0863 15.832 21.4848 14.3737 21.4848 12.5508C21.4848 10.7005 22.1182 9.20573 23.3852 8.06641C24.6612 6.91797 26.2107 6.34375 28.0336 6.34375C29.8839 6.34375 31.4014 6.88607 32.5863 7.9707C33.7803 9.04622 34.3773 10.4362 34.3773 12.1406ZM30.6039 13.0703C30.6039 11.5755 30.3533 10.2266 29.852 9.02344C29.3598 7.8112 28.6488 7.20508 27.7191 7.20508C26.8988 7.20508 26.2654 7.62891 25.8188 8.47656C25.3721 9.3151 25.1488 10.4954 25.1488 12.0176C25.1488 13.6764 25.3995 15.0391 25.9008 16.1055C26.4112 17.1628 27.1085 17.6914 27.9926 17.6914C28.8585 17.6914 29.5102 17.2676 29.9477 16.4199C30.3852 15.5723 30.6039 14.4557 30.6039 13.0703Z" />
    <path d="M39.4715 9.06445C39.9272 8.14388 40.4513 7.45573 41.0438 7C41.6362 6.54427 42.297 6.31641 43.0262 6.31641C43.7189 6.31641 44.2703 6.51693 44.6805 6.91797C45.0997 7.31901 45.3094 7.82031 45.3094 8.42188C45.3094 8.89583 45.159 9.30143 44.8582 9.63867C44.5665 9.9668 44.2065 10.1309 43.7781 10.1309C43.4591 10.1309 43.1948 10.0488 42.9852 9.88477C42.7755 9.7207 42.5522 9.42904 42.3152 9.00977C41.9871 8.4082 41.7 8.10742 41.4539 8.10742C41.1167 8.10742 40.7339 8.44922 40.3055 9.13281C39.8771 9.81641 39.6629 11.1426 39.6629 13.1113C39.6629 15.5996 39.7449 16.985 39.909 17.2676C40.0822 17.541 40.4559 17.6777 41.0301 17.6777C41.5314 17.6777 41.782 17.8145 41.782 18.0879C41.782 18.3431 41.5359 18.4707 41.0438 18.4707C40.7703 18.4707 40.3738 18.4434 39.8543 18.3887C39.3803 18.3431 38.9337 18.3203 38.5145 18.3203C37.6121 18.3203 36.7189 18.3522 35.8348 18.416C35.4611 18.4434 35.2423 18.457 35.1785 18.457C34.7957 18.457 34.6043 18.3158 34.6043 18.0332C34.6043 17.7871 34.8276 17.6549 35.2742 17.6367C35.7117 17.6185 36.0171 17.5182 36.1902 17.3359C36.3634 17.1445 36.45 16.7344 36.45 16.1055L36.5047 12.6875C36.5047 11.9948 36.4773 11.1335 36.4227 10.1035C36.368 9.07357 36.3178 8.46289 36.2723 8.27148C36.2267 8.07096 36.1082 7.89323 35.9168 7.73828C35.7345 7.58333 35.4839 7.49219 35.1648 7.46484C34.8367 7.42839 34.6271 7.38737 34.5359 7.3418C34.4539 7.28711 34.4129 7.18229 34.4129 7.02734C34.4129 6.78125 34.6408 6.65365 35.0965 6.64453C35.935 6.63542 37.3615 6.52604 39.3758 6.31641L39.4715 9.06445Z" />
    <path d="M54.6008 7.56055C55.6763 6.61263 56.6151 6.13867 57.4172 6.13867C57.9549 6.13867 58.3924 6.29362 58.7297 6.60352C59.076 6.91341 59.2492 7.26888 59.2492 7.66992C59.2492 8.00716 59.1307 8.31706 58.8937 8.59961C58.6568 8.87305 58.3332 9.00977 57.923 9.00977C57.3488 9.00977 56.9341 8.69987 56.6789 8.08008C56.5057 7.66992 56.3371 7.46484 56.173 7.46484C55.9816 7.46484 55.6216 7.68359 55.093 8.12109C55.576 8.85026 55.8176 9.63411 55.8176 10.4727C55.8176 11.3294 55.5715 12.1178 55.0793 12.8379C54.5871 13.5488 53.9901 14.0547 53.2883 14.3555C52.5956 14.6562 51.6066 14.8659 50.3215 14.9844C49.2186 15.0846 48.5487 15.2533 48.3117 15.4902C48.0656 15.7363 47.9426 16.0098 47.9426 16.3105C47.9426 16.6751 48.1932 16.9121 48.6945 17.0215C49.1867 17.1309 50.5493 17.2174 52.7824 17.2812C56.2095 17.3906 57.923 18.5163 57.923 20.6582C57.923 22.1165 57.2805 23.3242 55.9953 24.2812C54.7193 25.2474 52.787 25.7305 50.1984 25.7305C48.2479 25.7305 46.8397 25.4434 45.9738 24.8691C45.1079 24.304 44.675 23.6387 44.675 22.873C44.675 22.0618 45.0259 21.3737 45.7277 20.8086C46.4387 20.2526 47.5005 19.8151 48.9133 19.4961C47.8378 19.3867 47.0311 19.1497 46.4934 18.7852C45.9556 18.4297 45.6867 17.9421 45.6867 17.3223C45.6867 16.666 45.9374 16.1146 46.4387 15.668C46.94 15.2214 47.6874 14.8796 48.6809 14.6426C47.6418 14.3236 46.8579 13.8587 46.3293 13.248C45.8098 12.6374 45.55 11.8763 45.55 10.9648C45.55 9.64323 46.0786 8.53581 47.1359 7.64258C48.1932 6.74023 49.4966 6.28906 51.0461 6.28906C51.7844 6.28906 52.4497 6.39388 53.0422 6.60352C53.6346 6.81315 54.1542 7.13216 54.6008 7.56055ZM48.8312 10.418C48.8312 11.5938 49.0272 12.5052 49.4191 13.1523C49.8202 13.7904 50.2941 14.1094 50.841 14.1094C51.4061 14.1094 51.8299 13.8359 52.1125 13.2891C52.3951 12.7331 52.5363 11.9036 52.5363 10.8008C52.5363 9.63411 52.3632 8.7181 52.0168 8.05273C51.6796 7.38737 51.2421 7.05469 50.7043 7.05469C50.1574 7.05469 49.7062 7.35547 49.3508 7.95703C49.0044 8.55859 48.8312 9.37891 48.8312 10.418ZM47.3684 22.5176C47.3684 23.1374 47.6737 23.6797 48.2844 24.1445C48.9042 24.6094 49.7746 24.8418 50.8957 24.8418C52.2538 24.8418 53.3794 24.5319 54.2727 23.9121C55.175 23.2923 55.6262 22.5586 55.6262 21.7109C55.6262 21.0273 55.2661 20.5215 54.5461 20.1934C53.826 19.8743 52.9009 19.7148 51.7707 19.7148C50.4309 19.7148 49.3599 19.9792 48.5578 20.5078C47.7648 21.0456 47.3684 21.7155 47.3684 22.5176Z" />
    <path d="M62.8531 12.0859C62.844 12.3503 62.8395 12.5417 62.8395 12.6602C62.8395 13.9544 63.1539 15.0527 63.7828 15.9551C64.4208 16.8483 65.2776 17.2949 66.3531 17.2949C67.456 17.2949 68.5406 16.8164 69.607 15.8594C69.8258 15.668 69.9807 15.5723 70.0719 15.5723C70.3089 15.5723 70.4273 15.6999 70.4273 15.9551C70.4273 16.1556 70.1539 16.5156 69.607 17.0352C69.0602 17.5547 68.3902 17.9466 67.5973 18.2109C66.8043 18.4753 65.984 18.6074 65.1363 18.6074C63.277 18.6074 61.8186 18.0423 60.7613 16.9121C59.7132 15.7728 59.1891 14.4329 59.1891 12.8926C59.1891 11.0423 59.7906 9.49284 60.9938 8.24414C62.206 6.98633 63.7145 6.35742 65.5191 6.35742C67.2145 6.35742 68.5042 6.92708 69.3883 8.06641C70.2815 9.20573 70.7281 10.2904 70.7281 11.3203C70.7281 11.6484 70.6415 11.8444 70.4684 11.9082C70.2952 11.972 69.7346 12.0039 68.7867 12.0039L62.8531 12.0859ZM62.9352 11.0879C64.2841 11.1061 65.0634 11.1152 65.273 11.1152C66.303 11.1152 66.9319 11.0423 67.1598 10.8965C67.3967 10.7507 67.5152 10.4544 67.5152 10.0078C67.5152 9.26042 67.301 8.59961 66.8727 8.02539C66.4443 7.45117 65.9339 7.16406 65.3414 7.16406C63.9378 7.16406 63.1357 8.47201 62.9352 11.0879Z" />
    <path d="M84.1211 12.1406C84.1211 13.8177 83.4967 15.3079 82.248 16.6113C80.9993 17.9147 79.4134 18.5664 77.4902 18.5664C75.722 18.5664 74.2363 18.0195 73.0332 16.9258C71.8301 15.832 71.2285 14.3737 71.2285 12.5508C71.2285 10.7005 71.862 9.20573 73.1289 8.06641C74.4049 6.91797 75.9544 6.34375 77.7773 6.34375C79.6276 6.34375 81.1452 6.88607 82.3301 7.9707C83.5241 9.04622 84.1211 10.4362 84.1211 12.1406ZM80.3477 13.0703C80.3477 11.5755 80.097 10.2266 79.5957 9.02344C79.1035 7.8112 78.3926 7.20508 77.4629 7.20508C76.6426 7.20508 76.0091 7.62891 75.5625 8.47656C75.1159 9.3151 74.8926 10.4954 74.8926 12.0176C74.8926 13.6764 75.1432 15.0391 75.6445 16.1055C76.1549 17.1628 76.8522 17.6914 77.7363 17.6914C78.6022 17.6914 79.2539 17.2676 79.6914 16.4199C80.1289 15.5723 80.3477 14.4557 80.3477 13.0703Z" />
    <path d="M89.0648 6.57617C89.1104 7.51497 89.1332 8.79557 89.1332 10.418C89.1332 12.8789 89.156 14.4557 89.2016 15.1484C89.2471 15.832 89.4249 16.347 89.7348 16.6934C90.0538 17.0397 90.4138 17.2129 90.8148 17.2129C91.2888 17.2129 91.7673 17.0352 92.2504 16.6797C92.7426 16.3242 93.1026 15.8594 93.3305 15.2852C93.5674 14.7109 93.6859 13.7721 93.6859 12.4688L93.7133 9.44727C93.7133 8.64518 93.6677 8.11654 93.5766 7.86133C93.4945 7.60612 93.2029 7.4694 92.7016 7.45117C92.1547 7.42383 91.8812 7.28255 91.8812 7.02734C91.8812 6.8724 91.9451 6.77669 92.0727 6.74023C92.2094 6.69466 92.5603 6.67188 93.1254 6.67188C94.3923 6.67188 95.5727 6.63997 96.6664 6.57617C96.7029 6.93164 96.7211 8.8776 96.7211 12.4141C96.7211 15.2578 96.7484 16.8118 96.8031 17.0762C96.8578 17.3314 97.154 17.4818 97.6918 17.5273C98.0108 17.5638 98.1703 17.696 98.1703 17.9238C98.1703 18.1882 97.988 18.3203 97.6234 18.3203C97.5505 18.3203 97.4366 18.3158 97.2816 18.3066C97.0264 18.2884 96.7256 18.2793 96.3793 18.2793C95.1671 18.2793 94.4971 18.2839 94.3695 18.293C94.2237 18.3021 94.1006 18.3066 94.0004 18.3066C93.8272 18.3066 93.7178 18.2793 93.6723 18.2246C93.6358 18.1608 93.6176 17.9831 93.6176 17.6914C93.6176 17.2174 93.6495 16.7389 93.7133 16.2559C93.0844 17.0215 92.419 17.5957 91.7172 17.9785C91.0245 18.3613 90.2953 18.5527 89.5297 18.5527C87.2055 18.5527 86.0434 17.2493 86.0434 14.6426V10.418C86.0434 8.95964 85.9887 8.10742 85.8793 7.86133C85.779 7.60612 85.5056 7.44661 85.059 7.38281C84.6579 7.32812 84.4574 7.20964 84.4574 7.02734C84.4574 6.78125 84.6352 6.6582 84.9906 6.6582C87.4333 6.6582 88.7914 6.63086 89.0648 6.57617Z" />
    <path d="M108.132 14.5059C108.132 15.1621 107.958 15.8001 107.612 16.4199C107.275 17.0397 106.76 17.5547 106.067 17.9648C105.384 18.3659 104.582 18.5664 103.661 18.5664C102.512 18.5664 101.542 18.3294 100.749 17.8555C100.402 17.6549 100.179 17.5547 100.079 17.5547C99.9604 17.5547 99.8693 17.6322 99.8055 17.7871C99.6596 18.1517 99.4865 18.334 99.2859 18.334C99.1674 18.334 99.0809 18.2884 99.0262 18.1973C98.9806 18.1061 98.9396 17.7005 98.9031 16.9805C98.8758 16.2513 98.8621 15.39 98.8621 14.3965C98.8621 14.0137 98.9715 13.8223 99.1902 13.8223C99.409 13.8223 99.6414 14.1048 99.8875 14.6699C100.762 16.7207 101.957 17.7461 103.47 17.7461C103.998 17.7461 104.445 17.6094 104.809 17.3359C105.183 17.0625 105.37 16.666 105.37 16.1465C105.37 15.709 105.197 15.3353 104.85 15.0254C104.513 14.7064 103.861 14.3099 102.895 13.8359C101.437 13.1159 100.439 12.487 99.9012 11.9492C99.3543 11.4115 99.0809 10.696 99.0809 9.80273C99.0809 8.77279 99.4773 7.9388 100.27 7.30078C101.063 6.65365 102.039 6.33008 103.196 6.33008C104.117 6.33008 105.051 6.60352 105.999 7.15039C106.126 7.22331 106.231 7.25977 106.313 7.25977C106.432 7.25977 106.523 7.15951 106.587 6.95898C106.678 6.70378 106.81 6.57617 106.983 6.57617C107.102 6.57617 107.184 6.61719 107.229 6.69922C107.275 6.78125 107.339 7.20964 107.421 7.98438C107.503 8.75 107.544 9.38802 107.544 9.89844C107.544 10.2539 107.439 10.4316 107.229 10.4316C107.011 10.4316 106.787 10.1764 106.559 9.66602C105.785 7.9707 104.668 7.12305 103.21 7.12305C102.681 7.12305 102.253 7.25521 101.925 7.51953C101.596 7.78385 101.432 8.06641 101.432 8.36719C101.432 8.75 101.642 9.10091 102.061 9.41992C102.481 9.74805 103.296 10.1901 104.509 10.7461C105.548 11.2201 106.268 11.5892 106.669 11.8535C107.079 12.1087 107.425 12.4824 107.708 12.9746C107.99 13.4577 108.132 13.9681 108.132 14.5059Z" />
    <path d="M125.544 12.3023C125.544 11.1236 125.788 10.0753 126.275 9.15732C126.774 8.22798 127.476 7.50832 128.383 6.99832C129.29 6.47698 130.332 6.21632 131.511 6.21632C133.007 6.21632 134.265 6.61865 135.285 7.42332C136.305 8.21665 136.962 9.29898 137.257 10.6703H133.67C133.455 10.217 133.154 9.87132 132.769 9.63332C132.395 9.39532 131.959 9.27632 131.46 9.27632C130.689 9.27632 130.072 9.55398 129.607 10.1093C129.154 10.6533 128.927 11.3843 128.927 12.3023C128.927 13.2316 129.154 13.974 129.607 14.5293C130.072 15.0733 130.689 15.3453 131.46 15.3453C131.959 15.3453 132.395 15.2263 132.769 14.9883C133.154 14.7503 133.455 14.4046 133.67 13.9513H137.257C136.962 15.3226 136.305 16.4107 135.285 17.2153C134.265 18.0087 133.007 18.4053 131.511 18.4053C130.332 18.4053 129.29 18.1503 128.383 17.6403C127.476 17.119 126.774 16.3993 126.275 15.4813C125.788 14.552 125.544 13.4923 125.544 12.3023Z" />
    <path d="M150.752 6.33532V18.3203H147.42V13.5093H143.357V18.3203H140.025V6.33532H143.357V10.8403H147.42V6.33532H150.752Z" />
    <path d="M161.431 16.3653H157.181L156.535 18.3203H153.033L157.402 6.33532H161.244L165.596 18.3203H162.077L161.431 16.3653ZM160.598 13.8153L159.306 9.93932L158.031 13.8153H160.598Z" />
    <path d="M173.941 18.3203L171.561 13.9003H171.204V18.3203H167.872V6.33532H173.125C174.088 6.33532 174.904 6.50532 175.573 6.84532C176.241 7.17398 176.746 7.63298 177.086 8.22232C177.426 8.80032 177.596 9.45198 177.596 10.1773C177.596 10.9933 177.369 11.713 176.916 12.3363C176.474 12.9483 175.822 13.3846 174.961 13.6453L177.664 18.3203H173.941ZM171.204 11.6223H172.853C173.306 11.6223 173.646 11.5146 173.873 11.2993C174.099 11.084 174.213 10.7723 174.213 10.3643C174.213 9.97898 174.094 9.67865 173.856 9.46332C173.629 9.23665 173.295 9.12332 172.853 9.12332H171.204V11.6223Z" />
    <path d="M183.633 6.33532V18.3203H180.301V6.33532H183.633Z" />
    <path d="M195.747 6.33532V8.98732H192.551V18.3203H189.219V8.98732H186.057V6.33532H195.747Z" />
    <path d="M209.067 6.33532L204.851 14.5123V18.3203H201.502V14.5123L197.286 6.33532H201.094L203.202 10.9593L205.31 6.33532H209.067Z" />
    <path d="M224.751 6.33532V8.98732H221.555V18.3203H218.223V8.98732H215.061V6.33532H224.751Z" />
    <path d="M232.92 18.4393C231.798 18.4393 230.766 18.1786 229.826 17.6573C228.885 17.1246 228.137 16.3936 227.582 15.4643C227.038 14.5236 226.766 13.464 226.766 12.2853C226.766 11.1066 227.038 10.0526 227.582 9.12332C228.137 8.18265 228.885 7.45165 229.826 6.93032C230.766 6.40898 231.798 6.14832 232.92 6.14832C234.053 6.14832 235.084 6.40898 236.014 6.93032C236.954 7.45165 237.697 8.18265 238.241 9.12332C238.785 10.0526 239.057 11.1066 239.057 12.2853C239.057 13.464 238.785 14.5236 238.241 15.4643C237.697 16.3936 236.954 17.1246 236.014 17.6573C235.073 18.1786 234.042 18.4393 232.92 18.4393ZM232.92 15.3453C233.77 15.3453 234.438 15.0676 234.926 14.5123C235.424 13.957 235.674 13.2146 235.674 12.2853C235.674 11.3333 235.424 10.5853 234.926 10.0413C234.438 9.48598 233.77 9.20832 232.92 9.20832C232.058 9.20832 231.384 9.48598 230.897 10.0413C230.409 10.5853 230.166 11.3333 230.166 12.2853C230.166 13.226 230.409 13.974 230.897 14.5293C231.384 15.0733 232.058 15.3453 232.92 15.3453Z" />
    <path d="M248.834 18.3203L245.077 13.0673V18.3203H241.745V6.33532H245.077V11.5033L248.8 6.33532H252.642L248.239 12.1493L252.863 18.3203H248.834Z" />
    <path d="M258.602 9.00431V10.9593H262.427V13.4923H258.602V15.6513H262.937V18.3203H255.27V6.33532H262.937V9.00431H258.602Z" />
    <path d="M276.874 18.3203H273.542L269.105 11.6223V18.3203H265.773V6.33532H269.105L273.542 13.1183V6.33532H276.874V18.3203Z" />
  </Wrapper>
);

export default LogoTablet;
