const SliderBg = ({height}) => {
  return (
    <svg  width="100%" height={`${height ? height : '500'}` } viewBox="0 0 500 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M149.683 3.864C149.262 5.95 146.914 9.485 143.502 13.171C137.802 19.328 136.883 22.091 139.395 25.525C140.6 27.173 140.579 27.587 139.242 28.565C137.511 29.831 138.342 32 140.559 32C142.508 32 142.691 52.511 140.75 53.417C139.75 53.883 139.75 54.117 140.75 54.583C141.619 54.989 142 58.011 142 64.5C142 70.989 141.619 74.011 140.75 74.417C139.75 74.883 139.75 75.117 140.75 75.583C141.619 75.989 142 79.011 142 85.5C142 92.076 141.631 94.958 140.75 95.254C139.761 95.587 139.771 96.004 140.8 97.25C141.647 98.276 141.995 101.036 141.8 105.163L141.5 111.5L127.75 111.778L114 112.056V116.028V120H108.5H103V111.5C103 103.1 103.029 103 105.5 103C107.118 103 108 102.439 108 101.41C108 100.135 107.075 99.887 103.338 100.16C100.243 100.386 98.535 100.08 98.255 99.25C98.023 98.562 98.546 98 99.417 98C101.237 98 101.564 96.355 99.857 95.786C98.999 95.5 98.999 94.871 99.857 93.268C100.485 92.093 101 89.557 101 87.632C101 84.733 100.054 83.171 95.489 78.532C92.457 75.452 89.791 71.935 89.563 70.716C89.335 69.497 89.095 68.275 89.03 68C88.965 67.725 88.326 69.141 87.61 71.146C86.894 73.151 84.75 76.159 82.847 77.83C80.943 79.501 78.522 82.473 77.465 84.434C75.572 87.951 75.572 88.049 77.468 91.57C79.118 94.635 79.186 95.283 77.945 96.146C76.845 96.912 76.799 97.273 77.75 97.659C80.462 98.76 78.771 100 74.559 100C69.602 100 67.419 101.686 71.733 102.182C74.479 102.498 74.502 102.562 74.79 110.75L75.081 119H71.04H67V126.5V134L64.25 133.884C62.558 133.813 62.173 133.592 63.25 133.311C65.327 132.768 65.603 131 63.611 131C62.819 131 61.944 129.515 61.574 127.543C60.675 122.751 54.428 115.208 46.595 109.457C42.968 106.793 40 104.042 40 103.342C40 102.643 39.104 101.591 38.01 101.005C36.915 100.42 36.087 99.616 36.169 99.22C36.251 98.824 36.04 97.825 35.702 97C35.363 96.175 34.929 94.15 34.737 92.5L34.389 89.5L33.611 92.5C33.183 94.15 32.574 96.175 32.258 97C31.941 97.825 31.754 98.838 31.841 99.25C32.028 100.134 29.674 102.915 25.5 106.739C13.255 117.959 10.075 121.69 8.848 126.278C8.154 128.875 7.004 131 6.293 131C5.582 131 5 131.45 5 132C5 132.55 5.675 133 6.5 133C7.548 133 8 134.056 8 136.5C8 139.917 7.905 140 4 140H0V156.499V172.999L556.368 172.998C862.371 172.998 1114.82 172.712 1117.37 172.363L1122 171.728V155.864V140H1118C1114.09 140 1114 139.917 1114 136.5C1114 134.056 1114.45 133 1115.5 133C1116.32 133 1117 132.55 1117 132C1117 131.45 1116.42 131 1115.71 131C1115 131 1113.85 128.876 1113.15 126.279C1112.08 122.277 1110.22 119.913 1100.91 110.737C1094.87 104.785 1090.18 99.515 1090.48 99.027C1090.79 98.538 1090.57 97.856 1090.02 97.51C1089.46 97.165 1089 95.559 1089 93.941C1089 92.323 1088.55 91 1088 91C1087.45 91 1087 92.323 1087 93.941C1087 95.559 1086.54 97.165 1085.98 97.51C1085.43 97.856 1085.21 98.535 1085.51 99.019C1085.81 99.503 1085.14 100.388 1084.03 100.985C1082.91 101.582 1082 102.617 1081.99 103.285C1081.99 103.953 1078.61 107.195 1074.49 110.488C1066.98 116.49 1061 123.513 1061 126.332C1061 128.925 1059.84 131 1058.39 131C1056.4 131 1056.67 132.767 1058.75 133.311C1059.83 133.592 1059.44 133.813 1057.75 133.884L1055 134V126.5V119H1051H1047V113.625C1047 104.747 1047.87 102 1050.68 102C1052.05 102 1052.85 101.562 1052.5 101C1052.16 100.45 1049.88 100 1047.44 100C1045 100 1043 99.55 1043 99C1043 98.45 1043.68 98 1044.5 98C1046.46 98 1046.43 96.381 1044.46 95.625C1043.09 95.099 1043.1 94.702 1044.55 91.91C1046.8 87.555 1045.82 84.88 1039.47 77.968C1035.77 73.946 1033.97 71.123 1033.9 69.259C1033.8 66.654 1033.75 66.686 1033.01 69.837C1032.53 71.869 1030.22 75.132 1027.1 78.181C1021.26 83.9 1020.17 86.821 1021.99 91.855C1022.93 94.46 1022.97 95.509 1022.14 95.787C1020.48 96.341 1020.75 98 1022.5 98C1023.33 98 1024 98.654 1024 99.453C1024 100.609 1022.98 100.785 1019 100.314C1014.79 99.815 1014 99.981 1014 101.361C1014 102.443 1014.85 103 1016.5 103C1018.97 103 1019 103.1 1019 111.5V120H1013.5H1008V116.028V112.056L994.25 111.778L980.5 111.5L980.2 105.163C980.005 101.036 980.353 98.276 981.2 97.25C982.229 96.004 982.239 95.587 981.25 95.254C979.558 94.685 979.514 77.886 981.2 76.2C982.133 75.267 982.133 74.733 981.2 73.8C980.461 73.061 980 69.433 980 64.35C980 57.559 980.31 55.914 981.75 55.05C983.417 54.05 983.417 53.95 981.75 52.95C980.282 52.07 980 50.386 980 42.485C980 34.094 980.217 32.954 982 32C984.149 30.85 984.687 28.396 982.92 27.807C982.165 27.555 982.203 26.649 983.047 24.797C984.823 20.899 983.607 17.822 978.046 12.143C975.311 9.35 972.685 5.588 972.209 3.783L971.344 0.5L970.665 4C970.231 6.238 968.429 9.029 965.667 11.741C959.539 17.757 958.315 20.348 959.775 24.214C960.761 26.828 960.69 27.507 959.32 28.508C957.525 29.82 958.298 32 960.559 32C962.508 32 962.691 52.511 960.75 53.417C959.75 53.883 959.75 54.117 960.75 54.583C961.619 54.989 962 58.011 962 64.5C962 70.989 961.619 74.011 960.75 74.417C959.75 74.883 959.75 75.117 960.75 75.583C962.444 76.374 962.488 94.112 960.8 95.8C959.867 96.733 959.867 97 960.8 97C961.618 97 962 99.206 962 103.928V110.856L956.576 111.534C953.592 111.907 950.667 111.912 950.076 111.547C948.719 110.708 948.654 100.332 950 99.5C952.193 98.145 950.968 96 948 96C944.458 96 944.359 95.631 947 92.273C950.156 88.261 949.701 81.095 945.83 73.832C942.964 68.455 933.294 58.698 926.829 54.661C925.823 54.033 925 52.975 925 52.309C925 51.644 924.357 50.74 923.571 50.3C922.785 49.86 922.098 49.167 922.044 48.76C921.99 48.354 921.752 47.454 921.516 46.76C921.279 46.067 920.929 44.15 920.737 42.5L920.389 39.5L919.611 42.5C919.183 44.15 918.572 46.175 918.253 47C917.934 47.825 917.622 48.725 917.56 49C917.176 50.709 913.362 55.097 909.057 58.782L904.054 63.065L904.081 46.058C904.097 35.89 904.508 28.804 905.102 28.437C905.76 28.03 905.761 27.417 905.106 26.627C904.487 25.882 904.463 24.882 905.042 23.966C906.42 21.788 906.285 21.394 902.794 17.418C901.03 15.409 899.445 12.833 899.271 11.694C898.71 8.02 897.329 7.948 896.717 11.561C896.536 12.627 894.992 14.966 893.285 16.759C890.722 19.449 890.193 20.801 890.249 24.509C890.286 26.979 890.695 29 891.158 29C892.569 29 892.175 42.775 890.75 43.254C889.775 43.582 889.801 44.039 890.868 45.332C891.922 46.609 892.061 48.767 891.474 54.745C891.055 59.01 890.807 66.657 890.923 71.737C891.039 76.817 890.851 81.432 890.505 81.993C890.152 82.564 887.815 80.995 885.187 78.423C880.253 73.592 866.43 64 864.403 64C863.066 64 862 61.769 862 58.969C862 57.121 857.364 53.044 853.5 51.493C851.712 50.776 851.685 50.646 853.246 50.273C854.636 49.94 854.782 49.462 853.961 47.927C853.394 46.867 852.383 46 851.715 46.001C850.487 46.001 850.128 39.539 851.292 38.375C851.617 38.05 851.466 37.045 850.957 36.142C850.449 35.239 849.616 32.925 849.106 31L848.18 27.5L848.09 31.191C848.041 33.221 847.566 35.15 847.036 35.478C846.506 35.805 846.231 38.307 846.426 41.037C846.693 44.777 846.438 46 845.39 46C844.626 46 844 46.638 844 47.417C844 48.196 843.437 49.06 842.75 49.338C842.003 49.639 842.205 49.874 843.25 49.921C845.939 50.042 845.329 51.621 842.072 52.97C838.221 54.565 836.378 56.769 835.52 60.806C834.94 63.532 833.902 64.56 829.6 66.67L824.384 69.228L819.192 66.597C815.157 64.553 814 63.443 814 61.618C814 58.52 810.808 54.577 807.034 53.014C803.812 51.679 802.977 50 805.535 50C806.76 50 806.854 49.596 806 48C805.411 46.9 804.343 46 803.626 46C802.245 46 801.953 39.714 803.272 38.395C803.663 38.004 803.449 37.041 802.797 36.255C802.145 35.47 801.305 32.953 800.931 30.663L800.25 26.5L800.125 30.691C800.056 32.996 799.564 35.151 799.032 35.48C798.499 35.81 798.163 38.311 798.284 41.039C798.434 44.391 798.11 46 797.288 46C796.618 46 795.606 46.867 795.039 47.927C794.216 49.464 794.361 49.931 795.754 50.231C797 50.499 796.292 51.237 793.283 52.807C788.884 55.102 787 57.509 787 60.833C787 62.109 785.608 63.524 783.032 64.866C775.819 68.626 771.344 71.787 765.26 77.42L759.247 82.986L758.624 79.868C757.585 74.676 757.924 65.476 759.2 64.2C760.133 63.267 760.133 63 759.2 63C757.477 63 757.525 45.366 759.25 44.641C760.145 44.265 760.003 43.802 758.75 43.008C756.342 41.484 756.187 29.526 758.563 28.614C759.514 28.249 759.823 27.522 759.35 26.758C758.923 26.067 758.696 24.339 758.845 22.918C759.028 21.169 758.129 19.28 756.059 17.064C754.379 15.264 752.633 12.376 752.18 10.646L751.358 7.5L750.611 10.446C750.2 12.066 748.617 14.811 747.093 16.547L744.322 19.702L744.751 41.525L745.18 63.347L739.989 58.68C734.399 53.654 730.379 49 731.627 49C732.052 49 731.86 48.46 731.2 47.8C730.54 47.14 730 45.565 730 44.3C730 43.035 729.55 42 729 42C728.45 42 728 43.098 728 44.441C728 45.784 727.543 47.165 726.984 47.51C726.425 47.856 726.228 48.56 726.547 49.076C726.866 49.592 726.423 50.284 725.563 50.614C724.704 50.944 724 51.781 724 52.474C724 53.167 722.312 54.874 720.25 56.268C713.85 60.592 705.302 69.752 702.591 75.193C699.352 81.694 699.113 88.602 702 92.273C704.641 95.631 704.542 96 701 96C698.032 96 696.807 98.145 699 99.5C699.55 99.84 700 102.791 700 106.059C700 111.876 699.943 112 697.25 111.989C695.737 111.983 692.813 111.699 690.75 111.358L687 110.738V103.952C687 99.502 687.43 96.966 688.25 96.583C689.25 96.117 689.25 95.883 688.25 95.417C686.496 94.598 686.496 76.402 688.25 75.583C689.25 75.117 689.25 74.883 688.25 74.417C686.496 73.598 686.496 55.402 688.25 54.583C689.25 54.117 689.25 53.883 688.25 53.417C687.367 53.005 687 49.772 687 42.417C687 32.667 687.128 32 689 32C691.37 32 691.665 29.472 689.441 28.227C688.147 27.503 688.084 26.911 689.068 24.751C690.833 20.877 689.54 17.642 684.078 12.266C681.184 9.417 678.799 6.011 678.266 3.967L677.361 0.5L676.683 3.864C676.262 5.95 673.914 9.485 670.502 13.171C664.802 19.328 663.883 22.091 666.395 25.525C667.6 27.173 667.579 27.587 666.242 28.565C664.511 29.831 665.342 32 667.559 32C669.508 32 669.691 52.511 667.75 53.417C666.75 53.883 666.75 54.117 667.75 54.583C668.619 54.989 669 58.011 669 64.5C669 70.989 668.619 74.011 667.75 74.417C666.75 74.883 666.75 75.117 667.75 75.583C668.619 75.989 669 79.011 669 85.5C669 92.076 668.631 94.958 667.75 95.254C666.761 95.587 666.771 96.004 667.8 97.25C668.647 98.276 668.995 101.036 668.8 105.163L668.5 111.5L654.75 111.778L641 112.056V116.028V120H635.5H630V111.5C630 103.1 630.029 103 632.5 103C634.118 103 635 102.439 635 101.41C635 100.135 634.075 99.887 630.338 100.16C627.243 100.386 625.535 100.08 625.255 99.25C625.023 98.563 625.546 98 626.417 98C628.237 98 628.564 96.355 626.857 95.786C625.999 95.5 625.999 94.871 626.857 93.268C627.485 92.093 628 89.557 628 87.632C628 84.733 627.054 83.171 622.489 78.532C619.457 75.452 616.791 71.935 616.563 70.716C616.335 69.497 616.095 68.275 616.03 68C615.965 67.725 615.326 69.141 614.61 71.146C613.894 73.151 611.75 76.159 609.847 77.83C607.943 79.501 605.522 82.473 604.465 84.434C602.572 87.951 602.572 88.049 604.468 91.57C606.118 94.635 606.186 95.283 604.945 96.146C603.845 96.912 603.799 97.273 604.75 97.659C607.462 98.76 605.771 100 601.559 100C596.602 100 594.419 101.686 598.733 102.182C601.479 102.498 601.502 102.562 601.79 110.75L602.081 119H598.04H594V126.5C594 133.333 593.822 134 592 134C590.444 134 590 134.667 590 137C590 139 589.5 140 588.5 140C587.452 140 587 138.944 587 136.5C587 133.433 587.31 133 589.5 133C590.875 133 592 132.55 592 132C592 131.45 590.968 131 589.707 131C587.819 131 587.192 130.167 586.152 126.279C585.082 122.277 583.22 119.913 573.912 110.737C567.874 104.785 563.182 99.515 563.484 99.027C563.786 98.538 563.575 97.856 563.016 97.51C562.457 97.165 562 95.559 562 93.941C562 92.323 561.55 91 561 91C560.45 91 560 92.323 560 93.941C560 95.559 559.543 97.165 558.984 97.51C558.425 97.856 558.212 98.535 558.512 99.019C558.811 99.503 558.143 100.388 557.028 100.985C555.913 101.582 554.997 102.617 554.993 103.285C554.989 103.953 551.613 107.195 547.491 110.488C539.981 116.49 534 123.513 534 126.332C534 128.925 532.841 131 531.393 131C529.398 131 529.671 132.767 531.75 133.311C532.827 133.592 532.442 133.813 530.75 133.884L528 134V126.5V119H524H520V113.625C520 104.747 520.871 102 523.684 102C525.052 102 525.847 101.562 525.5 101C525.16 100.45 522.884 100 520.441 100C517.998 100 516 99.55 516 99C516 98.45 516.675 98 517.5 98C519.458 98 519.434 96.381 517.465 95.625C516.094 95.099 516.103 94.702 517.546 91.91C519.799 87.555 518.825 84.88 512.471 77.968C508.773 73.946 506.967 71.123 506.898 69.259C506.801 66.654 506.751 66.686 506.006 69.837C505.526 71.869 503.218 75.132 500.104 78.181C494.264 83.9 493.172 86.821 494.992 91.855C495.934 94.46 495.973 95.509 495.138 95.787C493.476 96.341 493.747 98 495.5 98C496.325 98 497 98.654 497 99.453C497 100.609 495.977 100.785 492 100.314C487.793 99.815 487 99.981 487 101.361C487 102.443 487.85 103 489.5 103C491.971 103 492 103.1 492 111.5V120H486.5H481V116.028V112.056L467.25 111.778L453.5 111.5L453.2 105.163C453.005 101.036 453.353 98.276 454.2 97.25C455.229 96.004 455.239 95.587 454.25 95.254C452.558 94.685 452.514 77.886 454.2 76.2C455.133 75.267 455.133 74.733 454.2 73.8C453.461 73.061 453 69.433 453 64.35C453 57.559 453.31 55.914 454.75 55.05C456.417 54.05 456.417 53.95 454.75 52.95C453.282 52.07 453 50.386 453 42.485C453 34.094 453.217 32.954 455 32C457.149 30.85 457.687 28.396 455.92 27.807C455.165 27.555 455.203 26.649 456.047 24.797C457.823 20.899 456.607 17.822 451.046 12.143C448.311 9.35 445.685 5.588 445.209 3.783L444.344 0.5L443.665 4C443.231 6.238 441.429 9.029 438.667 11.741C432.539 17.757 431.315 20.348 432.775 24.214C433.761 26.828 433.69 27.507 432.32 28.508C430.525 29.82 431.298 32 433.559 32C435.508 32 435.691 52.511 433.75 53.417C432.75 53.883 432.75 54.117 433.75 54.583C434.619 54.989 435 58.011 435 64.5C435 70.989 434.619 74.011 433.75 74.417C432.75 74.883 432.75 75.117 433.75 75.583C435.444 76.374 435.488 94.112 433.8 95.8C432.867 96.733 432.867 97 433.8 97C434.618 97 435 99.206 435 103.928V110.856L429.576 111.534C426.592 111.907 423.667 111.912 423.076 111.547C421.719 110.708 421.654 100.332 423 99.5C425.193 98.145 423.968 96 421 96C417.458 96 417.359 95.631 420 92.273C423.156 88.261 422.701 81.095 418.83 73.832C415.964 68.455 406.294 58.698 399.829 54.661C398.823 54.033 398 52.975 398 52.309C398 51.644 397.357 50.74 396.571 50.3C395.785 49.86 395.053 49.05 394.944 48.5C394.835 47.95 394.597 47.05 394.416 46.5C394.234 45.95 393.929 44.15 393.737 42.5L393.389 39.5L392.611 42.5C392.183 44.15 391.572 46.175 391.253 47C390.934 47.825 390.622 48.725 390.56 49C390.176 50.709 386.362 55.097 382.057 58.782L377.054 63.065L377.081 46.058C377.097 35.89 377.508 28.804 378.102 28.437C378.76 28.03 378.761 27.417 378.106 26.627C377.487 25.882 377.463 24.882 378.042 23.966C379.42 21.788 379.285 21.394 375.794 17.418C374.03 15.409 372.445 12.833 372.271 11.694C371.71 8.02 370.329 7.948 369.717 11.561C369.536 12.627 367.992 14.966 366.285 16.759C363.722 19.449 363.193 20.801 363.249 24.509C363.286 26.979 363.695 29 364.158 29C365.569 29 365.175 42.775 363.75 43.254C362.775 43.582 362.801 44.039 363.868 45.332C364.922 46.609 365.061 48.767 364.474 54.745C364.055 59.01 363.807 66.657 363.923 71.737C364.039 76.817 363.851 81.432 363.505 81.993C363.152 82.564 360.815 80.995 358.187 78.423C353.253 73.592 339.43 64 337.403 64C336.066 64 335 61.769 335 58.969C335 57.121 330.364 53.044 326.5 51.493C324.712 50.776 324.685 50.646 326.246 50.273C327.636 49.94 327.782 49.462 326.961 47.927C326.394 46.867 325.383 46 324.715 46.001C323.487 46.001 323.128 39.539 324.292 38.375C324.617 38.05 324.466 37.045 323.957 36.142C323.449 35.239 322.616 32.925 322.106 31L321.18 27.5L321.09 31.191C321.041 33.221 320.566 35.15 320.036 35.478C319.506 35.805 319.231 38.307 319.426 41.037C319.693 44.777 319.438 46 318.39 46C317.626 46 317 46.637 317 47.417C317 48.196 316.438 49.06 315.75 49.338C315.003 49.639 315.205 49.874 316.25 49.921C318.939 50.042 318.329 51.621 315.072 52.97C311.221 54.565 309.378 56.769 308.52 60.806C307.94 63.532 306.902 64.56 302.6 66.67L297.384 69.228L292.192 66.597C288.157 64.553 287 63.443 287 61.618C287 58.52 283.808 54.577 280.034 53.014C276.812 51.679 275.977 50 278.535 50C279.76 50 279.854 49.596 279 48C278.411 46.9 277.343 46 276.626 46C275.245 46 274.953 39.714 276.272 38.395C276.663 38.004 276.449 37.041 275.797 36.255C275.145 35.47 274.305 32.953 273.931 30.663L273.25 26.5L273.125 30.691C273.056 32.996 272.564 35.151 272.032 35.48C271.499 35.81 271.163 38.311 271.284 41.039C271.434 44.391 271.11 46 270.288 46C269.618 46 268.606 46.867 268.039 47.927C267.216 49.464 267.361 49.931 268.754 50.231C270 50.499 269.292 51.237 266.283 52.807C261.884 55.102 260 57.509 260 60.833C260 62.109 258.608 63.524 256.032 64.866C248.819 68.626 244.344 71.787 238.26 77.42L232.247 82.986L231.624 79.868C230.585 74.676 230.924 65.476 232.2 64.2C233.133 63.267 233.133 63 232.2 63C230.477 63 230.525 45.366 232.25 44.641C233.145 44.265 233.003 43.802 231.75 43.008C229.342 41.484 229.187 29.526 231.563 28.614C232.514 28.249 232.823 27.522 232.35 26.758C231.923 26.067 231.696 24.339 231.845 22.918C232.028 21.169 231.129 19.28 229.059 17.064C227.379 15.264 225.633 12.376 225.18 10.646L224.358 7.5L223.611 10.446C223.2 12.066 221.617 14.811 220.093 16.547L217.322 19.702L217.751 41.525L218.18 63.347L212.989 58.68C207.399 53.654 203.379 49 204.627 49C205.052 49 204.86 48.46 204.2 47.8C203.54 47.14 203 45.565 203 44.3C203 43.035 202.55 42 202 42C201.45 42 201 43.098 201 44.441C201 45.784 200.543 47.165 199.984 47.51C199.425 47.856 199.228 48.56 199.547 49.076C199.866 49.592 199.423 50.284 198.563 50.614C197.704 50.944 197 51.781 197 52.474C197 53.167 195.313 54.874 193.25 56.268C186.85 60.592 178.302 69.752 175.591 75.193C172.352 81.694 172.113 88.602 175 92.273C177.641 95.631 177.542 96 174 96C171.032 96 169.807 98.145 172 99.5C172.55 99.84 173 102.791 173 106.059C173 111.876 172.943 112 170.25 111.989C168.738 111.983 165.813 111.699 163.75 111.358L160 110.738V103.952C160 99.502 160.43 96.966 161.25 96.583C162.25 96.117 162.25 95.883 161.25 95.417C160.381 95.011 160 91.989 160 85.5C160 79.011 160.381 75.989 161.25 75.583C162.25 75.117 162.25 74.883 161.25 74.417C160.381 74.011 160 70.989 160 64.5C160 58.011 160.381 54.989 161.25 54.583C162.25 54.117 162.25 53.883 161.25 53.417C160.367 53.005 160 49.772 160 42.417C160 32.667 160.128 32 162 32C164.37 32 164.665 29.472 162.441 28.227C161.147 27.503 161.084 26.911 162.068 24.751C163.833 20.877 162.54 17.642 157.078 12.266C154.184 9.417 151.799 6.011 151.266 3.967L150.361 0.5L149.683 3.864Z"
        fill="black"
        fillOpacity="0.1"
      />
    </svg>
  );
};

export default SliderBg;
