/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 837.0, "minX": 0.0, "maxY": 2749.0, "series": [{"data": [[0.0, 837.0], [0.1, 839.0], [0.2, 844.0], [0.3, 844.0], [0.4, 848.0], [0.5, 848.0], [0.6, 848.0], [0.7, 854.0], [0.8, 856.0], [0.9, 856.0], [1.0, 857.0], [1.1, 860.0], [1.2, 860.0], [1.3, 860.0], [1.4, 860.0], [1.5, 861.0], [1.6, 861.0], [1.7, 861.0], [1.8, 862.0], [1.9, 863.0], [2.0, 864.0], [2.1, 864.0], [2.2, 865.0], [2.3, 865.0], [2.4, 867.0], [2.5, 867.0], [2.6, 868.0], [2.7, 868.0], [2.8, 868.0], [2.9, 868.0], [3.0, 869.0], [3.1, 869.0], [3.2, 870.0], [3.3, 870.0], [3.4, 870.0], [3.5, 871.0], [3.6, 871.0], [3.7, 872.0], [3.8, 872.0], [3.9, 872.0], [4.0, 872.0], [4.1, 872.0], [4.2, 874.0], [4.3, 874.0], [4.4, 874.0], [4.5, 874.0], [4.6, 875.0], [4.7, 875.0], [4.8, 875.0], [4.9, 875.0], [5.0, 876.0], [5.1, 877.0], [5.2, 878.0], [5.3, 878.0], [5.4, 878.0], [5.5, 878.0], [5.6, 878.0], [5.7, 879.0], [5.8, 879.0], [5.9, 879.0], [6.0, 880.0], [6.1, 880.0], [6.2, 881.0], [6.3, 881.0], [6.4, 881.0], [6.5, 881.0], [6.6, 881.0], [6.7, 882.0], [6.8, 883.0], [6.9, 883.0], [7.0, 883.0], [7.1, 883.0], [7.2, 883.0], [7.3, 884.0], [7.4, 884.0], [7.5, 884.0], [7.6, 885.0], [7.7, 886.0], [7.8, 886.0], [7.9, 887.0], [8.0, 887.0], [8.1, 887.0], [8.2, 887.0], [8.3, 888.0], [8.4, 888.0], [8.5, 888.0], [8.6, 888.0], [8.7, 889.0], [8.8, 890.0], [8.9, 890.0], [9.0, 890.0], [9.1, 890.0], [9.2, 891.0], [9.3, 891.0], [9.4, 891.0], [9.5, 891.0], [9.6, 892.0], [9.7, 892.0], [9.8, 892.0], [9.9, 892.0], [10.0, 892.0], [10.1, 893.0], [10.2, 893.0], [10.3, 894.0], [10.4, 894.0], [10.5, 894.0], [10.6, 895.0], [10.7, 895.0], [10.8, 895.0], [10.9, 895.0], [11.0, 896.0], [11.1, 896.0], [11.2, 896.0], [11.3, 897.0], [11.4, 897.0], [11.5, 897.0], [11.6, 897.0], [11.7, 897.0], [11.8, 899.0], [11.9, 899.0], [12.0, 899.0], [12.1, 899.0], [12.2, 900.0], [12.3, 900.0], [12.4, 900.0], [12.5, 900.0], [12.6, 900.0], [12.7, 901.0], [12.8, 901.0], [12.9, 901.0], [13.0, 901.0], [13.1, 901.0], [13.2, 901.0], [13.3, 901.0], [13.4, 901.0], [13.5, 902.0], [13.6, 902.0], [13.7, 902.0], [13.8, 903.0], [13.9, 903.0], [14.0, 903.0], [14.1, 904.0], [14.2, 904.0], [14.3, 904.0], [14.4, 904.0], [14.5, 905.0], [14.6, 905.0], [14.7, 905.0], [14.8, 905.0], [14.9, 905.0], [15.0, 905.0], [15.1, 906.0], [15.2, 906.0], [15.3, 906.0], [15.4, 906.0], [15.5, 907.0], [15.6, 907.0], [15.7, 907.0], [15.8, 907.0], [15.9, 908.0], [16.0, 908.0], [16.1, 908.0], [16.2, 908.0], [16.3, 908.0], [16.4, 908.0], [16.5, 908.0], [16.6, 909.0], [16.7, 909.0], [16.8, 909.0], [16.9, 909.0], [17.0, 910.0], [17.1, 910.0], [17.2, 910.0], [17.3, 910.0], [17.4, 910.0], [17.5, 910.0], [17.6, 911.0], [17.7, 911.0], [17.8, 911.0], [17.9, 911.0], [18.0, 911.0], [18.1, 911.0], [18.2, 911.0], [18.3, 911.0], [18.4, 912.0], [18.5, 912.0], [18.6, 912.0], [18.7, 912.0], [18.8, 912.0], [18.9, 912.0], [19.0, 913.0], [19.1, 913.0], [19.2, 913.0], [19.3, 913.0], [19.4, 913.0], [19.5, 913.0], [19.6, 913.0], [19.7, 913.0], [19.8, 913.0], [19.9, 914.0], [20.0, 914.0], [20.1, 914.0], [20.2, 914.0], [20.3, 914.0], [20.4, 914.0], [20.5, 914.0], [20.6, 914.0], [20.7, 915.0], [20.8, 915.0], [20.9, 916.0], [21.0, 917.0], [21.1, 917.0], [21.2, 917.0], [21.3, 917.0], [21.4, 917.0], [21.5, 917.0], [21.6, 917.0], [21.7, 917.0], [21.8, 917.0], [21.9, 918.0], [22.0, 918.0], [22.1, 918.0], [22.2, 918.0], [22.3, 918.0], [22.4, 918.0], [22.5, 918.0], [22.6, 918.0], [22.7, 918.0], [22.8, 919.0], [22.9, 919.0], [23.0, 919.0], [23.1, 919.0], [23.2, 919.0], [23.3, 919.0], [23.4, 920.0], [23.5, 920.0], [23.6, 920.0], [23.7, 920.0], [23.8, 921.0], [23.9, 921.0], [24.0, 921.0], [24.1, 921.0], [24.2, 921.0], [24.3, 921.0], [24.4, 921.0], [24.5, 921.0], [24.6, 922.0], [24.7, 922.0], [24.8, 922.0], [24.9, 922.0], [25.0, 922.0], [25.1, 922.0], [25.2, 922.0], [25.3, 922.0], [25.4, 922.0], [25.5, 923.0], [25.6, 923.0], [25.7, 923.0], [25.8, 923.0], [25.9, 923.0], [26.0, 923.0], [26.1, 923.0], [26.2, 923.0], [26.3, 923.0], [26.4, 923.0], [26.5, 923.0], [26.6, 924.0], [26.7, 924.0], [26.8, 924.0], [26.9, 924.0], [27.0, 924.0], [27.1, 924.0], [27.2, 924.0], [27.3, 924.0], [27.4, 924.0], [27.5, 924.0], [27.6, 924.0], [27.7, 924.0], [27.8, 925.0], [27.9, 925.0], [28.0, 925.0], [28.1, 925.0], [28.2, 925.0], [28.3, 925.0], [28.4, 925.0], [28.5, 925.0], [28.6, 925.0], [28.7, 925.0], [28.8, 925.0], [28.9, 925.0], [29.0, 926.0], [29.1, 926.0], [29.2, 926.0], [29.3, 926.0], [29.4, 926.0], [29.5, 926.0], [29.6, 926.0], [29.7, 926.0], [29.8, 926.0], [29.9, 926.0], [30.0, 927.0], [30.1, 927.0], [30.2, 927.0], [30.3, 927.0], [30.4, 927.0], [30.5, 927.0], [30.6, 928.0], [30.7, 928.0], [30.8, 928.0], [30.9, 928.0], [31.0, 928.0], [31.1, 928.0], [31.2, 928.0], [31.3, 928.0], [31.4, 928.0], [31.5, 929.0], [31.6, 929.0], [31.7, 929.0], [31.8, 929.0], [31.9, 929.0], [32.0, 929.0], [32.1, 929.0], [32.2, 929.0], [32.3, 930.0], [32.4, 930.0], [32.5, 930.0], [32.6, 930.0], [32.7, 930.0], [32.8, 931.0], [32.9, 931.0], [33.0, 931.0], [33.1, 931.0], [33.2, 931.0], [33.3, 931.0], [33.4, 932.0], [33.5, 932.0], [33.6, 932.0], [33.7, 932.0], [33.8, 932.0], [33.9, 932.0], [34.0, 933.0], [34.1, 933.0], [34.2, 933.0], [34.3, 933.0], [34.4, 933.0], [34.5, 933.0], [34.6, 933.0], [34.7, 933.0], [34.8, 933.0], [34.9, 933.0], [35.0, 934.0], [35.1, 934.0], [35.2, 934.0], [35.3, 935.0], [35.4, 935.0], [35.5, 935.0], [35.6, 935.0], [35.7, 935.0], [35.8, 935.0], [35.9, 935.0], [36.0, 935.0], [36.1, 935.0], [36.2, 935.0], [36.3, 936.0], [36.4, 936.0], [36.5, 936.0], [36.6, 936.0], [36.7, 936.0], [36.8, 936.0], [36.9, 936.0], [37.0, 936.0], [37.1, 937.0], [37.2, 937.0], [37.3, 937.0], [37.4, 937.0], [37.5, 937.0], [37.6, 937.0], [37.7, 937.0], [37.8, 937.0], [37.9, 937.0], [38.0, 937.0], [38.1, 937.0], [38.2, 937.0], [38.3, 938.0], [38.4, 938.0], [38.5, 938.0], [38.6, 938.0], [38.7, 938.0], [38.8, 938.0], [38.9, 938.0], [39.0, 938.0], [39.1, 939.0], [39.2, 939.0], [39.3, 939.0], [39.4, 939.0], [39.5, 939.0], [39.6, 939.0], [39.7, 939.0], [39.8, 940.0], [39.9, 940.0], [40.0, 940.0], [40.1, 941.0], [40.2, 941.0], [40.3, 941.0], [40.4, 941.0], [40.5, 941.0], [40.6, 941.0], [40.7, 941.0], [40.8, 941.0], [40.9, 941.0], [41.0, 941.0], [41.1, 941.0], [41.2, 941.0], [41.3, 942.0], [41.4, 942.0], [41.5, 942.0], [41.6, 942.0], [41.7, 942.0], [41.8, 942.0], [41.9, 942.0], [42.0, 942.0], [42.1, 942.0], [42.2, 942.0], [42.3, 943.0], [42.4, 943.0], [42.5, 943.0], [42.6, 943.0], [42.7, 943.0], [42.8, 943.0], [42.9, 944.0], [43.0, 944.0], [43.1, 944.0], [43.2, 944.0], [43.3, 944.0], [43.4, 945.0], [43.5, 945.0], [43.6, 945.0], [43.7, 945.0], [43.8, 945.0], [43.9, 945.0], [44.0, 945.0], [44.1, 945.0], [44.2, 945.0], [44.3, 945.0], [44.4, 946.0], [44.5, 946.0], [44.6, 946.0], [44.7, 947.0], [44.8, 947.0], [44.9, 947.0], [45.0, 947.0], [45.1, 948.0], [45.2, 948.0], [45.3, 948.0], [45.4, 948.0], [45.5, 948.0], [45.6, 948.0], [45.7, 949.0], [45.8, 949.0], [45.9, 949.0], [46.0, 949.0], [46.1, 949.0], [46.2, 949.0], [46.3, 949.0], [46.4, 949.0], [46.5, 949.0], [46.6, 949.0], [46.7, 949.0], [46.8, 949.0], [46.9, 950.0], [47.0, 950.0], [47.1, 950.0], [47.2, 950.0], [47.3, 951.0], [47.4, 951.0], [47.5, 951.0], [47.6, 951.0], [47.7, 951.0], [47.8, 952.0], [47.9, 952.0], [48.0, 952.0], [48.1, 952.0], [48.2, 953.0], [48.3, 953.0], [48.4, 953.0], [48.5, 953.0], [48.6, 953.0], [48.7, 953.0], [48.8, 954.0], [48.9, 954.0], [49.0, 954.0], [49.1, 954.0], [49.2, 954.0], [49.3, 954.0], [49.4, 954.0], [49.5, 955.0], [49.6, 955.0], [49.7, 955.0], [49.8, 955.0], [49.9, 955.0], [50.0, 955.0], [50.1, 955.0], [50.2, 956.0], [50.3, 956.0], [50.4, 956.0], [50.5, 956.0], [50.6, 956.0], [50.7, 956.0], [50.8, 956.0], [50.9, 956.0], [51.0, 957.0], [51.1, 957.0], [51.2, 957.0], [51.3, 957.0], [51.4, 957.0], [51.5, 957.0], [51.6, 958.0], [51.7, 958.0], [51.8, 958.0], [51.9, 958.0], [52.0, 958.0], [52.1, 958.0], [52.2, 958.0], [52.3, 958.0], [52.4, 959.0], [52.5, 959.0], [52.6, 959.0], [52.7, 959.0], [52.8, 959.0], [52.9, 959.0], [53.0, 959.0], [53.1, 960.0], [53.2, 960.0], [53.3, 960.0], [53.4, 960.0], [53.5, 960.0], [53.6, 960.0], [53.7, 960.0], [53.8, 960.0], [53.9, 960.0], [54.0, 960.0], [54.1, 961.0], [54.2, 961.0], [54.3, 961.0], [54.4, 961.0], [54.5, 961.0], [54.6, 961.0], [54.7, 961.0], [54.8, 961.0], [54.9, 962.0], [55.0, 962.0], [55.1, 962.0], [55.2, 962.0], [55.3, 962.0], [55.4, 962.0], [55.5, 962.0], [55.6, 962.0], [55.7, 963.0], [55.8, 963.0], [55.9, 963.0], [56.0, 963.0], [56.1, 963.0], [56.2, 963.0], [56.3, 963.0], [56.4, 963.0], [56.5, 963.0], [56.6, 963.0], [56.7, 963.0], [56.8, 963.0], [56.9, 963.0], [57.0, 963.0], [57.1, 964.0], [57.2, 964.0], [57.3, 964.0], [57.4, 964.0], [57.5, 965.0], [57.6, 965.0], [57.7, 965.0], [57.8, 965.0], [57.9, 965.0], [58.0, 965.0], [58.1, 965.0], [58.2, 965.0], [58.3, 965.0], [58.4, 965.0], [58.5, 965.0], [58.6, 966.0], [58.7, 966.0], [58.8, 966.0], [58.9, 966.0], [59.0, 966.0], [59.1, 966.0], [59.2, 966.0], [59.3, 966.0], [59.4, 967.0], [59.5, 967.0], [59.6, 967.0], [59.7, 967.0], [59.8, 967.0], [59.9, 967.0], [60.0, 968.0], [60.1, 968.0], [60.2, 968.0], [60.3, 968.0], [60.4, 968.0], [60.5, 968.0], [60.6, 968.0], [60.7, 968.0], [60.8, 969.0], [60.9, 969.0], [61.0, 969.0], [61.1, 969.0], [61.2, 969.0], [61.3, 969.0], [61.4, 969.0], [61.5, 969.0], [61.6, 969.0], [61.7, 969.0], [61.8, 969.0], [61.9, 969.0], [62.0, 969.0], [62.1, 969.0], [62.2, 970.0], [62.3, 970.0], [62.4, 970.0], [62.5, 970.0], [62.6, 970.0], [62.7, 970.0], [62.8, 970.0], [62.9, 970.0], [63.0, 971.0], [63.1, 971.0], [63.2, 971.0], [63.3, 971.0], [63.4, 971.0], [63.5, 971.0], [63.6, 971.0], [63.7, 972.0], [63.8, 972.0], [63.9, 972.0], [64.0, 972.0], [64.1, 972.0], [64.2, 972.0], [64.3, 972.0], [64.4, 972.0], [64.5, 972.0], [64.6, 972.0], [64.7, 972.0], [64.8, 972.0], [64.9, 972.0], [65.0, 972.0], [65.1, 973.0], [65.2, 973.0], [65.3, 973.0], [65.4, 973.0], [65.5, 973.0], [65.6, 973.0], [65.7, 973.0], [65.8, 974.0], [65.9, 974.0], [66.0, 974.0], [66.1, 974.0], [66.2, 974.0], [66.3, 974.0], [66.4, 975.0], [66.5, 975.0], [66.6, 975.0], [66.7, 975.0], [66.8, 975.0], [66.9, 976.0], [67.0, 976.0], [67.1, 976.0], [67.2, 976.0], [67.3, 976.0], [67.4, 976.0], [67.5, 976.0], [67.6, 976.0], [67.7, 976.0], [67.8, 977.0], [67.9, 977.0], [68.0, 977.0], [68.1, 977.0], [68.2, 977.0], [68.3, 977.0], [68.4, 977.0], [68.5, 977.0], [68.6, 977.0], [68.7, 978.0], [68.8, 978.0], [68.9, 978.0], [69.0, 978.0], [69.1, 978.0], [69.2, 979.0], [69.3, 979.0], [69.4, 979.0], [69.5, 979.0], [69.6, 979.0], [69.7, 979.0], [69.8, 979.0], [69.9, 979.0], [70.0, 979.0], [70.1, 979.0], [70.2, 980.0], [70.3, 980.0], [70.4, 980.0], [70.5, 980.0], [70.6, 981.0], [70.7, 981.0], [70.8, 981.0], [70.9, 981.0], [71.0, 981.0], [71.1, 981.0], [71.2, 981.0], [71.3, 981.0], [71.4, 981.0], [71.5, 982.0], [71.6, 982.0], [71.7, 982.0], [71.8, 982.0], [71.9, 982.0], [72.0, 982.0], [72.1, 982.0], [72.2, 982.0], [72.3, 982.0], [72.4, 982.0], [72.5, 983.0], [72.6, 983.0], [72.7, 983.0], [72.8, 983.0], [72.9, 983.0], [73.0, 983.0], [73.1, 983.0], [73.2, 983.0], [73.3, 983.0], [73.4, 984.0], [73.5, 984.0], [73.6, 984.0], [73.7, 984.0], [73.8, 985.0], [73.9, 985.0], [74.0, 985.0], [74.1, 985.0], [74.2, 985.0], [74.3, 985.0], [74.4, 985.0], [74.5, 986.0], [74.6, 986.0], [74.7, 986.0], [74.8, 986.0], [74.9, 986.0], [75.0, 986.0], [75.1, 986.0], [75.2, 987.0], [75.3, 987.0], [75.4, 987.0], [75.5, 987.0], [75.6, 987.0], [75.7, 987.0], [75.8, 987.0], [75.9, 988.0], [76.0, 988.0], [76.1, 988.0], [76.2, 988.0], [76.3, 989.0], [76.4, 989.0], [76.5, 990.0], [76.6, 990.0], [76.7, 990.0], [76.8, 990.0], [76.9, 990.0], [77.0, 990.0], [77.1, 990.0], [77.2, 990.0], [77.3, 990.0], [77.4, 990.0], [77.5, 991.0], [77.6, 991.0], [77.7, 991.0], [77.8, 991.0], [77.9, 991.0], [78.0, 991.0], [78.1, 991.0], [78.2, 991.0], [78.3, 991.0], [78.4, 991.0], [78.5, 992.0], [78.6, 992.0], [78.7, 993.0], [78.8, 993.0], [78.9, 993.0], [79.0, 993.0], [79.1, 994.0], [79.2, 994.0], [79.3, 994.0], [79.4, 994.0], [79.5, 994.0], [79.6, 994.0], [79.7, 995.0], [79.8, 995.0], [79.9, 995.0], [80.0, 995.0], [80.1, 995.0], [80.2, 995.0], [80.3, 995.0], [80.4, 996.0], [80.5, 996.0], [80.6, 996.0], [80.7, 996.0], [80.8, 996.0], [80.9, 997.0], [81.0, 997.0], [81.1, 997.0], [81.2, 998.0], [81.3, 998.0], [81.4, 998.0], [81.5, 998.0], [81.6, 999.0], [81.7, 999.0], [81.8, 999.0], [81.9, 1000.0], [82.0, 1000.0], [82.1, 1000.0], [82.2, 1000.0], [82.3, 1000.0], [82.4, 1000.0], [82.5, 1000.0], [82.6, 1001.0], [82.7, 1001.0], [82.8, 1001.0], [82.9, 1001.0], [83.0, 1001.0], [83.1, 1001.0], [83.2, 1002.0], [83.3, 1002.0], [83.4, 1002.0], [83.5, 1002.0], [83.6, 1003.0], [83.7, 1003.0], [83.8, 1003.0], [83.9, 1003.0], [84.0, 1003.0], [84.1, 1004.0], [84.2, 1004.0], [84.3, 1005.0], [84.4, 1005.0], [84.5, 1005.0], [84.6, 1006.0], [84.7, 1006.0], [84.8, 1006.0], [84.9, 1006.0], [85.0, 1007.0], [85.1, 1007.0], [85.2, 1007.0], [85.3, 1007.0], [85.4, 1008.0], [85.5, 1008.0], [85.6, 1009.0], [85.7, 1009.0], [85.8, 1010.0], [85.9, 1010.0], [86.0, 1011.0], [86.1, 1011.0], [86.2, 1011.0], [86.3, 1012.0], [86.4, 1012.0], [86.5, 1013.0], [86.6, 1013.0], [86.7, 1013.0], [86.8, 1013.0], [86.9, 1013.0], [87.0, 1013.0], [87.1, 1014.0], [87.2, 1014.0], [87.3, 1014.0], [87.4, 1014.0], [87.5, 1014.0], [87.6, 1014.0], [87.7, 1015.0], [87.8, 1015.0], [87.9, 1015.0], [88.0, 1015.0], [88.1, 1015.0], [88.2, 1015.0], [88.3, 1016.0], [88.4, 1016.0], [88.5, 1017.0], [88.6, 1018.0], [88.7, 1018.0], [88.8, 1019.0], [88.9, 1019.0], [89.0, 1019.0], [89.1, 1019.0], [89.2, 1019.0], [89.3, 1020.0], [89.4, 1020.0], [89.5, 1020.0], [89.6, 1021.0], [89.7, 1022.0], [89.8, 1022.0], [89.9, 1022.0], [90.0, 1022.0], [90.1, 1022.0], [90.2, 1023.0], [90.3, 1023.0], [90.4, 1024.0], [90.5, 1027.0], [90.6, 1027.0], [90.7, 1027.0], [90.8, 1027.0], [90.9, 1027.0], [91.0, 1028.0], [91.1, 1028.0], [91.2, 1029.0], [91.3, 1030.0], [91.4, 1031.0], [91.5, 1031.0], [91.6, 1032.0], [91.7, 1034.0], [91.8, 1034.0], [91.9, 1034.0], [92.0, 1035.0], [92.1, 1035.0], [92.2, 1035.0], [92.3, 1036.0], [92.4, 1037.0], [92.5, 1037.0], [92.6, 1038.0], [92.7, 1039.0], [92.8, 1041.0], [92.9, 1041.0], [93.0, 1042.0], [93.1, 1043.0], [93.2, 1043.0], [93.3, 1044.0], [93.4, 1046.0], [93.5, 1046.0], [93.6, 1046.0], [93.7, 1048.0], [93.8, 1048.0], [93.9, 1049.0], [94.0, 1049.0], [94.1, 1049.0], [94.2, 1051.0], [94.3, 1052.0], [94.4, 1052.0], [94.5, 1052.0], [94.6, 1053.0], [94.7, 1054.0], [94.8, 1056.0], [94.9, 1059.0], [95.0, 1059.0], [95.1, 1059.0], [95.2, 1060.0], [95.3, 1060.0], [95.4, 1061.0], [95.5, 1061.0], [95.6, 1063.0], [95.7, 1067.0], [95.8, 1068.0], [95.9, 1069.0], [96.0, 1069.0], [96.1, 1070.0], [96.2, 1070.0], [96.3, 1071.0], [96.4, 1071.0], [96.5, 1072.0], [96.6, 1073.0], [96.7, 1075.0], [96.8, 1075.0], [96.9, 1081.0], [97.0, 1082.0], [97.1, 1083.0], [97.2, 1083.0], [97.3, 1088.0], [97.4, 1089.0], [97.5, 1090.0], [97.6, 1095.0], [97.7, 1096.0], [97.8, 1099.0], [97.9, 1104.0], [98.0, 1107.0], [98.1, 1111.0], [98.2, 1113.0], [98.3, 1123.0], [98.4, 1129.0], [98.5, 1144.0], [98.6, 1148.0], [98.7, 1152.0], [98.8, 1156.0], [98.9, 1168.0], [99.0, 1178.0], [99.1, 1208.0], [99.2, 1324.0], [99.3, 1505.0], [99.4, 1511.0], [99.5, 1606.0], [99.6, 2018.0], [99.7, 2275.0], [99.8, 2554.0], [99.9, 2749.0]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 697.0, "series": [{"data": [[1100.0, 12.0], [2200.0, 1.0], [1200.0, 1.0], [2500.0, 1.0], [1300.0, 1.0], [2700.0, 1.0], [1500.0, 2.0], [800.0, 121.0], [1600.0, 1.0], [900.0, 697.0], [1000.0, 161.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 993.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 993.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0666666666666662, "minX": 1.70965548E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70965614E12, 1.1333333333333333], [1.70965548E12, 1.6666666666666667], [1.70965644E12, 1.133333333333334], [1.70965578E12, 1.2000000000000004], [1.70965608E12, 1.2000000000000004], [1.70965638E12, 1.0666666666666669], [1.70965572E12, 1.2542372881355934], [1.70965602E12, 1.1999999999999997], [1.70965632E12, 1.2166666666666672], [1.70965566E12, 1.0666666666666662], [1.70965596E12, 1.2500000000000007], [1.70965626E12, 1.1000000000000003], [1.7096556E12, 1.2000000000000004], [1.7096559E12, 1.4590163934426228], [1.7096562E12, 1.216666666666667], [1.70965554E12, 1.3000000000000005], [1.7096565E12, 1.210526315789474], [1.70965584E12, 1.1666666666666674]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7096565E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 938.7832080200502, "minX": 1.0, "maxY": 2269.3333333333335, "series": [{"data": [[4.0, 2269.3333333333335], [2.0, 1047.9045226130659], [1.0, 938.7832080200502]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}, {"data": [[1.2079999999999986, 964.4900000000002]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 51.3, "minX": 1.70965548E12, "maxY": 4698.616666666667, "series": [{"data": [[1.70965614E12, 4622.25], [1.70965548E12, 1618.2], [1.70965644E12, 4624.7], [1.70965578E12, 4625.933333333333], [1.70965608E12, 4625.95], [1.70965638E12, 4622.716666666666], [1.70965572E12, 4547.416666666667], [1.70965602E12, 4623.283333333334], [1.70965632E12, 4622.283333333334], [1.70965566E12, 4625.083333333333], [1.70965596E12, 4623.233333333334], [1.70965626E12, 4625.216666666666], [1.7096556E12, 4628.316666666667], [1.7096559E12, 4698.616666666667], [1.7096562E12, 4623.833333333333], [1.70965554E12, 4624.333333333333], [1.7096565E12, 1464.0666666666666], [1.70965584E12, 4625.166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70965614E12, 162.0], [1.70965548E12, 56.7], [1.70965644E12, 162.0], [1.70965578E12, 162.0], [1.70965608E12, 162.0], [1.70965638E12, 162.0], [1.70965572E12, 159.3], [1.70965602E12, 162.0], [1.70965632E12, 162.0], [1.70965566E12, 162.0], [1.70965596E12, 162.0], [1.70965626E12, 162.0], [1.7096556E12, 162.0], [1.7096559E12, 164.7], [1.7096562E12, 162.0], [1.70965554E12, 162.0], [1.7096565E12, 51.3], [1.70965584E12, 162.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7096565E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 935.2333333333333, "minX": 1.70965548E12, "maxY": 1144.2857142857144, "series": [{"data": [[1.70965614E12, 965.8666666666667], [1.70965548E12, 1144.2857142857144], [1.70965644E12, 946.7666666666667], [1.70965578E12, 959.9], [1.70965608E12, 958.2833333333332], [1.70965638E12, 935.2333333333333], [1.70965572E12, 958.3050847457629], [1.70965602E12, 960.9166666666669], [1.70965632E12, 957.6833333333334], [1.70965566E12, 936.25], [1.70965596E12, 964.8666666666669], [1.70965626E12, 945.5666666666666], [1.7096556E12, 973.4166666666669], [1.7096559E12, 1016.0655737704918], [1.7096562E12, 959.9666666666666], [1.70965554E12, 975.1666666666666], [1.7096565E12, 972.7894736842104], [1.70965584E12, 951.0666666666666]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7096565E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 935.1666666666669, "minX": 1.70965548E12, "maxY": 1142.5238095238096, "series": [{"data": [[1.70965614E12, 965.7833333333333], [1.70965548E12, 1142.5238095238096], [1.70965644E12, 946.7166666666669], [1.70965578E12, 959.7833333333333], [1.70965608E12, 958.2333333333335], [1.70965638E12, 935.1666666666669], [1.70965572E12, 958.2203389830509], [1.70965602E12, 960.8166666666668], [1.70965632E12, 957.666666666667], [1.70965566E12, 936.2333333333333], [1.70965596E12, 964.7166666666667], [1.70965626E12, 945.5], [1.7096556E12, 973.3166666666668], [1.7096559E12, 1015.9836065573769], [1.7096562E12, 959.8833333333334], [1.70965554E12, 975.0166666666667], [1.7096565E12, 972.5263157894736], [1.70965584E12, 950.9333333333334]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7096565E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 582.4166666666666, "minX": 1.70965548E12, "maxY": 781.6666666666666, "series": [{"data": [[1.70965614E12, 601.7500000000001], [1.70965548E12, 781.6666666666666], [1.70965644E12, 593.5833333333331], [1.70965578E12, 597.2500000000002], [1.70965608E12, 595.8833333333331], [1.70965638E12, 583.6500000000002], [1.70965572E12, 598.7966101694915], [1.70965602E12, 595.2833333333333], [1.70965632E12, 596.2999999999998], [1.70965566E12, 582.4166666666666], [1.70965596E12, 603.8166666666666], [1.70965626E12, 588.45], [1.7096556E12, 604.1333333333331], [1.7096559E12, 631.4426229508198], [1.7096562E12, 593.3333333333334], [1.70965554E12, 603.5666666666668], [1.7096565E12, 587.9999999999999], [1.70965584E12, 592.1166666666669]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7096565E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 837.0, "minX": 1.70965548E12, "maxY": 2749.0, "series": [{"data": [[1.70965614E12, 2018.0], [1.70965548E12, 2749.0], [1.70965644E12, 1129.0], [1.70965578E12, 1144.0], [1.70965608E12, 1178.0], [1.70965638E12, 1054.0], [1.70965572E12, 1090.0], [1.70965602E12, 1073.0], [1.70965632E12, 1113.0], [1.70965566E12, 1036.0], [1.70965596E12, 1152.0], [1.70965626E12, 1067.0], [1.7096556E12, 1606.0], [1.7096559E12, 2275.0], [1.7096562E12, 1168.0], [1.70965554E12, 1324.0], [1.7096565E12, 1095.0], [1.70965584E12, 1099.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70965614E12, 1006.9], [1.70965548E12, 2344.2000000000007], [1.70965644E12, 1008.0], [1.70965578E12, 1039.6], [1.70965608E12, 1015.0], [1.70965638E12, 995.5], [1.70965572E12, 1019.0], [1.70965602E12, 1040.8999999999999], [1.70965632E12, 1021.9], [1.70965566E12, 986.9], [1.70965596E12, 1019.9], [1.70965626E12, 997.6], [1.7096556E12, 1033.7], [1.7096559E12, 1071.4], [1.7096562E12, 1022.0], [1.70965554E12, 1047.4], [1.7096565E12, 1088.0], [1.70965584E12, 1012.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70965614E12, 2018.0], [1.70965548E12, 2749.0], [1.70965644E12, 1129.0], [1.70965578E12, 1144.0], [1.70965608E12, 1178.0], [1.70965638E12, 1054.0], [1.70965572E12, 1090.0], [1.70965602E12, 1073.0], [1.70965632E12, 1113.0], [1.70965566E12, 1036.0], [1.70965596E12, 1152.0], [1.70965626E12, 1067.0], [1.7096556E12, 1606.0], [1.7096559E12, 2275.0], [1.7096562E12, 1168.0], [1.70965554E12, 1324.0], [1.7096565E12, 1095.0], [1.70965584E12, 1099.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70965614E12, 1045.3999999999999], [1.70965548E12, 2729.4999999999995], [1.70965644E12, 1027.0], [1.70965578E12, 1070.45], [1.70965608E12, 1045.3999999999999], [1.70965638E12, 1031.8], [1.70965572E12, 1050.0], [1.70965602E12, 1051.8], [1.70965632E12, 1059.95], [1.70965566E12, 1008.6999999999999], [1.70965596E12, 1051.85], [1.70965626E12, 1022.75], [1.7096556E12, 1106.85], [1.7096559E12, 1198.3], [1.7096562E12, 1069.45], [1.70965554E12, 1081.8999999999999], [1.7096565E12, 1095.0], [1.70965584E12, 1047.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70965614E12, 837.0], [1.70965548E12, 883.0], [1.70965644E12, 844.0], [1.70965578E12, 856.0], [1.70965608E12, 848.0], [1.70965638E12, 854.0], [1.70965572E12, 848.0], [1.70965602E12, 862.0], [1.70965632E12, 839.0], [1.70965566E12, 860.0], [1.70965596E12, 844.0], [1.70965626E12, 868.0], [1.7096556E12, 860.0], [1.7096559E12, 856.0], [1.7096562E12, 867.0], [1.70965554E12, 860.0], [1.7096565E12, 884.0], [1.70965584E12, 871.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70965614E12, 947.0], [1.70965548E12, 958.0], [1.70965644E12, 946.0], [1.70965578E12, 957.0], [1.70965608E12, 955.0], [1.70965638E12, 940.0], [1.70965572E12, 953.0], [1.70965602E12, 956.5], [1.70965632E12, 960.0], [1.70965566E12, 933.0], [1.70965596E12, 968.0], [1.70965626E12, 945.5], [1.7096556E12, 958.0], [1.7096559E12, 984.0], [1.7096562E12, 954.5], [1.70965554E12, 973.0], [1.7096565E12, 963.0], [1.70965584E12, 947.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7096565E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 954.0, "minX": 1.0, "maxY": 2029.5, "series": [{"data": [[4.0, 2029.5], [1.0, 954.0], [2.0, 971.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 954.0, "minX": 1.0, "maxY": 2022.0, "series": [{"data": [[4.0, 2022.0], [1.0, 954.0], [2.0, 971.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.70965548E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70965614E12, 1.0], [1.70965548E12, 0.36666666666666664], [1.70965644E12, 1.0], [1.70965578E12, 1.0], [1.70965608E12, 1.0], [1.70965638E12, 1.0], [1.70965572E12, 0.9833333333333333], [1.70965602E12, 1.0], [1.70965632E12, 1.0], [1.70965566E12, 1.0], [1.70965596E12, 1.0166666666666666], [1.70965626E12, 1.0], [1.7096556E12, 1.0], [1.7096559E12, 1.0], [1.7096562E12, 1.0], [1.70965554E12, 1.0], [1.7096565E12, 0.3], [1.70965584E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7096565E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.70965548E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70965614E12, 1.0], [1.70965548E12, 0.35], [1.70965644E12, 1.0], [1.70965578E12, 1.0], [1.70965608E12, 1.0], [1.70965638E12, 1.0], [1.70965572E12, 0.9833333333333333], [1.70965602E12, 1.0], [1.70965632E12, 1.0], [1.70965566E12, 1.0], [1.70965596E12, 1.0], [1.70965626E12, 1.0], [1.7096556E12, 1.0], [1.7096559E12, 1.0166666666666666], [1.7096562E12, 1.0], [1.70965554E12, 1.0], [1.7096565E12, 0.31666666666666665], [1.70965584E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7096565E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.70965548E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70965614E12, 1.0], [1.70965548E12, 0.35], [1.70965644E12, 1.0], [1.70965578E12, 1.0], [1.70965608E12, 1.0], [1.70965638E12, 1.0], [1.70965572E12, 0.9833333333333333], [1.70965602E12, 1.0], [1.70965632E12, 1.0], [1.70965566E12, 1.0], [1.70965596E12, 1.0], [1.70965626E12, 1.0], [1.7096556E12, 1.0], [1.7096559E12, 1.0166666666666666], [1.7096562E12, 1.0], [1.70965554E12, 1.0], [1.7096565E12, 0.31666666666666665], [1.70965584E12, 1.0]], "isOverall": false, "label": "HTTP Request to orangeHRM for Load Testing-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7096565E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.70965548E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70965614E12, 1.0], [1.70965548E12, 0.35], [1.70965644E12, 1.0], [1.70965578E12, 1.0], [1.70965608E12, 1.0], [1.70965638E12, 1.0], [1.70965572E12, 0.9833333333333333], [1.70965602E12, 1.0], [1.70965632E12, 1.0], [1.70965566E12, 1.0], [1.70965596E12, 1.0], [1.70965626E12, 1.0], [1.7096556E12, 1.0], [1.7096559E12, 1.0166666666666666], [1.7096562E12, 1.0], [1.70965554E12, 1.0], [1.7096565E12, 0.31666666666666665], [1.70965584E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7096565E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

