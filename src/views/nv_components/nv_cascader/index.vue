<template>
    <PageMain>
        <div class="area">
            <div>
                <span class="imp">1. 二级联动（不带“全部”选项）</span>
                <el-cascader
                    size="large"
                    :options="provinceAndCityData2"
                    v-model="selectedOptions1"
                    @change="handleChange">
                </el-cascader>
            </div>
            <div class="bind">
                <div>绑定值：{{selectedOptions1}}</div>
                <div>区域码转汉字：{{CodeToText[selectedOptions1[0]]}},{{CodeToText[selectedOptions1[1]]}}</div>
                <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions1[0]], CodeToText[selectedOptions1[1]])}}</div>
            </div>
            <div class="three">
                <span class="imp">2. 二级联动(带有“全部”选项)</span>
                <el-cascader
                    size="large"
                    :options="provinceAndCityDataPlus2"
                    v-model="selectedOptions3"
                    @change="handleChange">
                </el-cascader>
            </div>
            <div class="bind">
                <div>绑定值：{{selectedOptions3}}</div>
                <div>区域码转汉字：{{CodeToText[selectedOptions3[0]]}},{{CodeToText[selectedOptions3[1]]}}</div>
                <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions3[0]], CodeToText[selectedOptions3[1]])}}</div>
            </div>
            <div class="three">
                <span class="imp">3. 三级联动（不带“全部”选项）</span>
                <el-cascader
                    class="long"
                    size="large"
                    :options="regionData2"
                    v-model="selectedOptions2"
                    @change="handleChange">
                </el-cascader>
            </div>
            <div class="bind">
                <div>绑定值：{{selectedOptions2}}</div>
                <div>区域码转汉字：{{CodeToText[selectedOptions2[0]]}},{{CodeToText[selectedOptions2[1]]}},{{CodeToText[selectedOptions2[2]]}}</div>
                <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions2[0]], CodeToText[selectedOptions2[1]], CodeToText[selectedOptions2[2]])}}</div>
            </div>
            <div class="three">
                <span class="imp">4. 三级联动(带"全部选项")</span>
                <el-cascader
                    size="large"
                    class="long"
                    :options="regionDataPlus2"
                    v-model="selectedOptions4"
                    @change="handleChange">
                </el-cascader>
            </div>
            <div class="bind">
                <div>绑定值：{{selectedOptions4}}</div>
                <div>区域码转汉字：{{CodeToText[selectedOptions4[0]]}},{{CodeToText[selectedOptions4[1]]}},{{CodeToText[selectedOptions4[2]]}}</div>
                <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions4[0]], CodeToText[selectedOptions4[1]], CodeToText[selectedOptions4[2]])}}</div>
            </div>
        </div>
    </PageMain>
</template>
<script setup>
import { ref } from 'vue'
import { 
    provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode
} from 'element-china-area-data';

let provinceAndCityData2 = ref(provinceAndCityData)
let provinceAndCityDataPlus2 = ref(provinceAndCityDataPlus)
let regionData2 = ref(regionData)
let regionDataPlus2 = ref(regionDataPlus)
let selectedOptions1 = ref(["110000", "110100"])
let selectedOptions2 = ref(["120000", "120100", "120101"])
let selectedOptions3 = ref(["130000", ""])
let selectedOptions4 = ref(["120000", "120100", ""])

const handleChange = (value) =>{
    console.log(value)
    // let provinceCode = value[0]; // 省编码
    // let cityCode = value[1] // 市编码
    // let province = codeToText[value[0]] // 省中文
    // let city = codeToText[value[1]] // 市中文
    // console.log(provinceCode, cityCode, province, city);
}
const convertTextToCode = (provinceText, cityText, regionText) => {
    let code = "";
    if (provinceText && TextToCode[provinceText]) {
        const province = TextToCode[provinceText];
        code += province.code + ", ";
        if (cityText && province[cityText]) {
            const city = province[cityText];
            code += city.code + ", ";
            if (regionText && city[regionText]) {
                code += city[regionText].code;
            }
        }
    }
    return code;
}
</script>
<style lang="scss" scoped>
.long {
    width: 250px;
}
.area {
    padding-top: 50px;
    margin: 0 auto;
    width: 800px;
}
.three {
    margin-top: 100px;
}
.bind {
    margin-top: 20px;
    line-height: 40px;
    text-indent: 15px;
}
.imp {
    color: var(--el-color-primary);
}
</style>