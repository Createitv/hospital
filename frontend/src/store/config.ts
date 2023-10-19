/** @format */

import { defineStore } from 'pinia'

export const useCofigStore = defineStore('useConfig', {
	state: () => {
		return {
			config: {
				'(H)保安部': '皇姑院区',
				'(H)保洁部': '皇姑院区',
				'(H)病案质控办': '皇姑院区',
				'(H)病理科': '皇姑院区',
				'(H)财务': '皇姑院区',
				'(H)餐饮服务': '皇姑院区',
				'(H)超声科门诊': '皇姑院区',
				'(H)超声诊断科': '皇姑院区',
				'(H)儿保门诊': '皇姑院区',
				'(H)耳鼻喉门诊': '皇姑院区',
				'(H)发展部': '皇姑院区',
				'(H)放射诊断科': '皇姑院区',
				'(H)妇科门诊': '皇姑院区',
				'(H)妇科门诊手术室': '皇姑院区',
				'(H)妇科一病区': '皇姑院区',
				'(H)干诊科门诊': '皇姑院区',
				'(H)工程部': '皇姑院区',
				'(H)呼吸科门诊': '皇姑院区',
				'(H)呼吸内科一病区': '皇姑院区',
				'(H)护理办公室': '皇姑院区',
				'(H)急诊科门诊': '皇姑院区',
				'(H)计划免疫接种门诊(成人接种)': '皇姑院区',
				'(H)检验科': '皇姑院区',
				'(H)康复医学科二病区': '皇姑院区',
				'(H)康复医学科门诊': '皇姑院区',
				'(H)康复医学科一病区': '皇姑院区',
				'(H)口腔科门诊': '皇姑院区',
				'(H)老年病干诊科一病区': '皇姑院区',
				'(H)麻醉科': '皇姑院区',
				'(H)门诊部': '皇姑院区',
				'(H)门诊采血室': '皇姑院区',
				'(H)内分泌门诊': '皇姑院区',
				'(H)内窥镜中心': '皇姑院区',
				'(H)器材': '皇姑院区',
				'(H)人事': '皇姑院区',
				'(H)神经功能检查室': '皇姑院区',
				'(H)神经康复科治疗中心': '皇姑院区',
				'(H)神经内科二病区': '皇姑院区',
				'(H)神经内科门诊': '皇姑院区',
				'(H)肾内科病区': '皇姑院区',
				'(H)收费处': '皇姑院区',
				'(H)手术室': '皇姑院区',
				'(H)睡眠监测中心': '皇姑院区',
				'(H)体检科': '皇姑院区',
				'(H)消毒供应中转站': '皇姑院区',
				'(H)消化科门诊': '皇姑院区',
				'(H)消化内科一病区': '皇姑院区',
				'(H)心功能检查室': '皇姑院区',
				'(H)心血管内科病房': '皇姑院区',
				'(H)心血管内科门诊': '皇姑院区',
				'(H)信息科': '皇姑院区',
				'(H)行政': '皇姑院区',
				'(H)行政2': '皇姑院区',
				'(H)血液净化科门诊': '皇姑院区',
				'(H)药局': '皇姑院区',
				'(H)医保物价办': '皇姑院区',
				'(H)医政医管科': '皇姑院区',
				'(H)中医科病房': '皇姑院区',
				'(H)中医科门诊': '皇姑院区',
				'(H)综合外科病房': '皇姑院区',
				'(H)综合外科二病区': '皇姑院区',
				'(H)综合外科门诊': '皇姑院区',
				ICU一病房: 'ICU一病房',
				PICC门诊: '肿瘤整合治疗中心',
				办公室: '办公室',
				'办公室（彩塔月子中心）': '办公室（彩塔月子中心）',
				保洁部: '保洁部',
				保洁处: '保洁部',
				保卫处: '保卫处',
				变态反应科一门诊: '变态反应科',
				便民门诊: '门诊部',
				病理科: '病理科',
				财务部: '财务部',
				产二科病房: '产二科',
				产二科门诊: '产二科',
				'产房.': '产房',
				产一科病房: '产一科',
				'产一科病房/产二科病房': '产一科',
				'产一科病房/产二科病房/妇儿超声科/新生儿科一病房/妇一科病房': '产一科',
				'产一科病房/产二科病房/妇一科病房': '产一科',
				'产一科病房/产二科病房/新生儿科一病房/妇儿超声科/妇一科病房': '产一科',
				产一科门诊: '产一科',
				'产一科门诊/产二科病房': '产一科',
				'肠道、发热门诊药局': '药局',
				超声科: '超声科',
				车队: '医疗产业办公室',
				成人接种门诊: '妇科',
				第三产业办公室: '医疗产业办公室',
				第三方业务部: '疾病管理办公室',
				儿科急诊: '儿科',
				儿科急诊药局: '药局',
				儿科药局: '药局',
				儿科一病房: '儿科',
				儿科一门诊: '儿科',
				儿童康复病房: '康复科',
				儿童康复中心: '儿童康复中心',
				儿童体检中心: '儿童体检中心',
				耳鼻喉科会诊门诊: '耳鼻喉科',
				耳鼻咽喉科一病房: '耳鼻喉科',
				耳鼻咽喉科一门诊: '耳鼻喉科',
				发热病房一病区: '感染科门诊',
				发热一门诊: '感染科门诊',
				放疗科一病房: '放疗科',
				放疗科一门诊: '放疗科',
				放射介入诊疗室: '心脏二中心',
				放射诊断科: '放射诊断科',
				放射诊断科一门诊: '放射诊断科',
				风湿免疫一病房: '内分泌',
				妇产药局: '药局',
				妇儿超声科: '妇儿超声科',
				妇儿手术室: '妇儿手术室',
				妇儿营销中心: '妇儿营销中心',
				妇二科病房: '妇二科',
				妇二科门诊: '妇二科',
				妇一科病房: '妇科',
				'妇一科病房/产一科病房/新生儿科一病房/月子中心一病房': '妇科',
				妇一科门诊: '妇科',
				感染科: '感染科门诊',
				感染科门诊: '感染科门诊',
				感染控制科: '感染控制科',
				干部保健二科二病房: '干部保健二科',
				干部保健二科一病房: '干部保健二科',
				干部保健门诊: '干部保健门诊',
				干部保健三科病房: '干部保健三科病房',
				干部保健五科病房: '干保五',
				干部保健一科二病房: '干部保健一科二病房',
				干部保健一科一病房: '干部保健一科一病房',
				'干部保健一科一病房/老年医学中心/干部保健三科病房/肿瘤内二科病房/放疗科一病房/骨三科一病房/内分泌一病房/中医科一病房作废':
					'干部保健一科一病房',
				高压氧科: '高压氧科',
				工程部: '工程部',
				功能性训练中心: '康复科',
				骨二科: '骨二科',
				骨三科一病房: '骨三科',
				骨三科一急诊: '骨三科',
				骨一科病房: '骨一科',
				'骨一科病房/骨二科/骨三科一病房': '骨一科',
				'骨一科病房/骨二科/手足显微烧伤外门诊': '骨一科',
				骨折术后康复中心: '康复科',
				国际部: '国际部',
				核医学科一病房: '核医学',
				核医学科一门诊: '核医学',
				呼吸内科二病房: '呼吸内科',
				呼吸内科一病房: '呼吸内科',
				呼吸内科一门诊: '呼吸内科',
				互联网医院: '互联网医院',
				护理部: '护理部',
				会员中心: '会员中心',
				基因健康管理门诊: '健康管理中心',
				急诊服务管理办公室: '急诊服务管理办公室',
				'急诊科—病房': '急诊',
				急诊科门诊: '急诊',
				急诊内科一病房: '急诊',
				急诊外科一病房: '急诊',
				急诊药局: '药局',
				疾病管理办公室: '疾病管理办公室',
				疾病预防控制处: '疾病预防控制处',
				集团: '集团',
				计算机中心: '计算机中心',
				检验科: '检验科',
				健康管理中心: '健康管理中心',
				经济管理科: '经济管理科',
				精准医学基因诊断管理中心: '精准医学基因诊断管理中心',
				精准医学细胞中心: '精准医学细胞中心',
				颈肩腰腿疼诊疗病房: '颈肩腰腿疼诊疗中心',
				颈肩腰腿疼诊疗门诊: '颈肩腰腿疼诊疗中心',
				颈肩腰腿治疗中心一门诊: '颈肩腰腿疼诊疗中心',
				静脉用药调配中心: '药局',
				康复医学病房: '康复科',
				康复医学门诊: '康复科',
				科技教育处: '科技教育处',
				客服中心: '客服中心',
				客户关系办公室: '医疗产业办公室',
				口腔内科一门诊: '口腔科',
				口腔外科一病房: '口腔科',
				口腔外科一门诊: '口腔科',
				老年医学中心: '老年医学中心',
				老年医学中心二病房: '老年医学中心',
				麻醉科: '麻醉科',
				'麻醉科/手术室': '手术室',
				美食广场: '美食广场',
				门诊部: '门诊部',
				门诊采血室: '门诊部',
				门诊收费: '门诊收费',
				门诊药局: '药局',
				泌尿外科一病房: '泌尿外科',
				泌尿外科一门诊: '泌尿外科',
				内分泌一病房: '内分泌',
				女性健康管理中心: '女性健康管理中心',
				皮肤病诊断与治疗中心病房: '皮肤科',
				皮肤病诊断与治疗中心门诊: '皮肤科',
				皮肤科: '皮肤科',
				皮肤科病房: '皮肤科',
				普德财务部: '普德',
				普德电诊科: '普德',
				普德放射科: '普德',
				普德国医堂: '普德',
				普德急诊科: '普德',
				普德康复治疗区: '普德',
				普德内二科病房: '普德',
				普德内三科病房: '普德',
				普德器材药管科: '普德',
				普德人事科: '普德',
				普德软伤治疗区: '普德',
				普德手术室: '普德',
				普德外科病房: '普德',
				普德信息科: '普德',
				普德行政办公室: '普德',
				普德一门诊部: '普德',
				普通外科二病房: '普外二科',
				普通外科一病房: '普外一科一病区',
				'普通外科一病房/神经外科一病房/耳鼻咽喉科一病房/眼科一病房/呼吸内科一病房':
					'神经外科',
				普通外三科病房: '普通外三科',
				'普通外三科病房/普通外五科病房': '普通外三科',
				普通外五科病房: '普通外五科',
				普通外一科二病房: '普外一科一病区',
				企划部: '企划部',
				器材科: '器材科',
				器材科设备总库: '资产管理办公室',
				人力资源部: '办公室',
				日间病房: '日间病房',
				日间手术室: '门诊部',
				乳腺科一病房: '黄了',
				伤口造口中心: '骨三科',
				神经功能电诊室: '神经功能电诊室',
				神经内二科二病房: '神经内二科二病房',
				神经内二科三病房: '神经内二科三病房',
				神经内二科一病房: '神经内二科一病房',
				神经内一科二病区: '神经内一科二病区',
				神经内一科一病区: '神经内一科一病区',
				'神经内一科一病区/神经内二科三病房/神经内二科一病房': '神经内一科',
				神经外科ICU一病房: '神经外科',
				神经外科二病房: '神经外科',
				神经外科一病房: '神经外科',
				神经外科一门诊: '神经外科',
				肾病内科二病房: '肾病内科',
				肾病内科一病房: '肾病内科',
				生殖健康中心一门诊: '生殖健康中心',
				生殖中心门诊: '生殖健康中心',
				食堂: '食堂',
				视光中心: '视光中心',
				手术室: '手术室',
				'手术室/麻醉科': '手术室',
				手足显微烧伤外门诊: '骨三科',
				输血科: '输血科',
				胎心监护室: '产房',
				特需门诊: '疾病管理办公室',
				疼痛科一病房: '疼痛科一病房',
				胃肠肿瘤外科一病房: '黄了',
				物价科: '物价科',
				物业: '工程部',
				洗衣房: '洗衣房',
				系统开发中心: '系统开发中心',
				消毒供应中心: '消毒供应中心',
				消化内科二病房: '消化内科',
				消化内科一病房: '消化内科',
				'消化内科一病房/神经内一科一病区/神经内二科三病房/神经内二科一病房/心脏二中心病房':
					'消化内科',
				消化内科一门诊: '消化内科',
				小儿神经母细胞瘤诊治中心病房: '小儿神经母细胞瘤诊治中心病房',
				'小儿神经母细胞瘤诊治中心病房/肾病内科一病房/泌尿外科一病房/胸外科一病房/综合内科一病房':
					'肾病内科',
				心功能电诊室: '心功能电诊室',
				心内科导管室: '心脏一中心',
				心血管外科一病房: '心脏一中心',
				心脏二中心CCU病房: '心脏二中心',
				心脏二中心病房: '心脏二中心',
				心脏二中心门诊: '心脏二中心',
				心脏一中心ICU病房: '心脏一中心',
				心脏一中心二病房: '心脏一中心',
				心脏一中心门诊: '心脏一中心',
				心脏一中心三病房: '心脏一中心',
				心脏一中心五病房: '心脏一中心',
				心脏一中心一病房: '心脏一中心',
				'心脏一中心一病房/骨一科病房/骨二科/肿瘤内二科病房/疼痛科一病房/儿科一病房':
					'心脏一中心',
				新生儿处置室: '产房',
				新生儿科一病房: '新生儿科',
				新生儿一门诊: '新生儿科',
				信息中心固定资产库: '信息科',
				胸外科一病房: '胸外科',
				'胸外科一病房/呼吸内科一病房': '胸外科',
				'胸外科一病房/呼吸内科一病房/呼吸内科二病房': '胸外科',
				'胸外科一病房/诊断内窥镜科/普通外五科病房/手术室/神经外科一病房':
					'胸外科',
				胸外科一门诊: '胸外科',
				血液净化病区: '血液净化病房',
				血液净化科一门诊: '血液净化科',
				血液净化中心病区: '血液净化科',
				言语吞咽治疗中心: '康复科',
				眼科一病房: '眼科',
				眼科一门诊: '眼科',
				养老中心一病房: '养老中心',
				药库: '药局',
				一体化产房: '产房',
				医保科: '医保科',
				医疗产业办公室: '医疗产业办公室',
				医务部: '医政医管处',
				医学工程部: '医学工程部',
				医政医管处: '医政医管处',
				营养科: '营养科',
				月子中心21层: '万豪月子中心',
				月子中心22层: '万豪月子中心',
				月子中心二病房: '月子中心',
				月子中心功能区: '万豪月子中心',
				月子中心三病房: '月子中心',
				月子中心一病房: '月子中心',
				'运动、作业治疗中心': '康复科',
				诊断内窥镜科: '内窥镜',
				整形美容科一病房: '整形美容',
				整形美容再生医学中心一病房: '整形美容',
				整形美容再生医学中心一门诊: '整形美容',
				治疗内窥镜科: '内窥镜',
				中药局: '中药局',
				中医传统疗法中心: '中医科',
				中医儿科门诊: '中医儿科',
				中医康复儿科: '康复科',
				中医康复中心: '康复科',
				中医科艾灸馆: '中医科',
				'中医科-国医堂门诊': '中医科',
				中医科一病房: '中医科',
				中医科一病房作废: '中医科',
				中医科一病区: '中医科一病区',
				中医科一门诊: '中医科',
				'中医科-针灸馆门诊': '中医科',
				中医治未病门诊: '中医科',
				肿瘤VIP1病房: '黄了',
				肿瘤介入科一病房: '黄了',
				肿瘤内二科病房: '肿瘤内二科',
				肿瘤内科一病房: '黄了',
				肿瘤内一科病房: '肿瘤一科',
				肿瘤整合治疗中心一门诊: '肿瘤整合治疗中心',
				住院药局: '药局',
				资产管理办公室: '资产管理办公室',
				综合麻醉科: '麻醉科',
			},
		}
	},
	persist: true,
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		init(config: Object) {
			this.config = {}
			this.config = config
		},
	},
})
