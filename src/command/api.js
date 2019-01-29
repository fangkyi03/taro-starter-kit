
      
    
     function MblCompanyController_TRACEH5 (target) {
       
      /**
      * 追溯码查询主体基地信息
      */
      function getBaseAndMassifUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getBaseAndMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体H5
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体Brand
      */
      function getCompanyBrandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyBrand',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体Brand
      */
      function getCompanyBrandPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyBrandPC',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体信息
      */
      function getCompanyByH5UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyByH5',params:{...paramsData},...info}
          }
      }
      /**
      * 通过二维码获取主体信息
      */
      function getCompanyByQRCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyByQRCode',params:{...paramsData},...info}
          }
      }
      /**
      * 获取新模板H5基本信息页面
      */
      function getCompanyNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyNew',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码查询主体PC
      */
      function getCompanyPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getCompanyPC',params:{...paramsData},...info}
          }
      }
      /**
      * 农事信息
      */
      function getFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 通过二维码获取基地信息
      */
      function getFarmlandByQRCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/companySource/getFarmlandByQRCode',params:{...paramsData},...info}
          }
      }
       return {getBaseAndMassifUsingPOST,getCompanyUsingPOST,getCompanyBrandUsingPOST,getCompanyBrandPCUsingPOST,getCompanyByH5UsingPOST,getCompanyByQRCodeUsingPOST,getCompanyNewUsingPOST,getCompanyPCUsingPOST,getFarmingUsingPOST,getFarmlandByQRCodeUsingPOST}
     }
  
     function InfController_TRACEH5 (target) {
       
      /**
      * 根据id查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/information/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新闻资讯分页查询
      */
      function infoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/information/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,infoUsingPOST}
     }
  
     function MainPageController_TRACEH5 (target) {
       
      /**
      * 基地查询
      */
      function farmlandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/farmland',params:{...paramsData},...info}
          }
      }
      /**
      * 市场行情
      */
      function marketUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/marketNotice',params:{...paramsData},...info}
          }
      }
      /**
      * 通知公告
      */
      function noticeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/notice',params:{...paramsData},...info}
          }
      }
      /**
      * 通知公告详情
      */
      function noticeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/notice/{id}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查追溯码是否存在
      */
      function traceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/main/trace',params:{...paramsData},...info}
          }
      }
       return {farmlandUsingPOST,marketUsingPOST,noticeUsingPOST,noticeUsingPOST,traceUsingPOST}
     }
  
     function PlyProductController_TRACEH5 (target) {
       
      /**
      * H5获取产品信息接口
      */
      function getProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 获取第三方检测的图片
      */
      function getProductInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductInspection',params:{...paramsData},...info}
          }
      }
      /**
      * H5获取主体产品信息接口
      */
      function getProductListByMcidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductList',params:{...paramsData},...info}
          }
      }
      /**
      * H5获取产品信息接口
      */
      function getProductPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getProductPC',params:{...paramsData},...info}
          }
      }
      /**
      * 获取快速检测列表
      */
      function getQuickInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/plySource/getQuickInspection',params:{...paramsData},...info}
          }
      }
       return {getProductUsingPOST,getProductInspectionUsingPOST,getProductListByMcidUsingPOST,getProductPCUsingPOST,getQuickInspectionUsingPOST}
     }
  
     function ProcessController_TRACEH5 (target) {
       
      /**
      * 包装
      */
      function packUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/package',params:{...paramsData},...info}
          }
      }
      /**
      * 采摘
      */
      function pickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/pick',params:{...paramsData},...info}
          }
      }
      /**
      * 分拣
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/process/sort',params:{...paramsData},...info}
          }
      }
       return {packUsingPOST,pickUsingPOST,sortUsingPOST}
     }
  
     function FarmRecordController_TRACEH5 (target) {
       
      /**
      * 检测追溯
      */
      function selectInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectInspection',params:{...paramsData},...info}
          }
      }
      /**
      * 检测追溯
      */
      function selectInspectionPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectInspectionPC',params:{...paramsData},...info}
          }
      }
      /**
      * 查询农事生产过程H5接口
      */
      function selectRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectRecord',params:{...paramsData},...info}
          }
      }
      /**
      * 查询农事生产过程H5接口
      */
      function selectRecordPCUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/record/selectRecordPC',params:{...paramsData},...info}
          }
      }
       return {selectInspectionUsingPOST,selectInspectionPCUsingPOST,selectRecordUsingPOST,selectRecordPCUsingPOST}
     }
  
     function SysCategoryController_H5_TRACEH5 (target) {
       
      /**
      * 地图json
      */
      function getAliJsonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/sysCategory/getAliJson',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表不分页
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/sysCategory/selectCategory',params:{...paramsData},...info}
          }
      }
       return {getAliJsonUsingPOST,selectCategoryUsingPOST}
     }
  
     function UpyunUploadController_TRACEH5 (target) {
       
      /**
      * 上传图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/upyun/uploadImg',params:{...paramsData},...info}
          }
      }
       return {uploadImgUsingPOST}
     }
  
     function UserController_TRACEH5 (target) {
       
      /**
      * 企业注册组织机构代码校验
      */
      function creditCodeCheckUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/creditCodeCheck',params:{...paramsData},...info}
          }
      }
      /**
      * 显示农业主体类别
      */
      function getCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/getCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 企业注册手机号校验
      */
      function mobileCheckUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/mobileCheck',params:{...paramsData},...info}
          }
      }
      /**
      * 注册
      */
      function selectRecordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/user/signup',params:{...paramsData},...info}
          }
      }
       return {creditCodeCheckUsingPOST,getCategoryUsingPOST,mobileCheckUsingPOST,selectRecordUsingPOST}
     }
  
     function MblCompanyController_H5_TRACEH5 (target) {
       
      /**
      * 追溯码查询主体基本信息
      */
      function getCompanyBriefUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/brief',params:{...paramsData},...info}
          }
      }
      /**
      * 主体证书
      */
      function getCertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/cert',params:{...paramsData},...info}
          }
      }
      /**
      * 主体查询行业、市区
      */
      function getConfigUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/config',params:{...paramsData},...info}
          }
      }
      /**
      * mcid查询主体信息
      */
      function getCompanyDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 显示农业主体类别
      */
      function getCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/getCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 获取所有类别集合
      */
      function getTypeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/getTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体分页查询
      */
      function companyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/infoPage',params:{...paramsData},...info}
          }
      }
      /**
      * 主体分页查询
      */
      function getCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/page',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务红黑榜查询
      */
      function redBlackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/company/redBlcak',params:{...paramsData},...info}
          }
      }
       return {getCompanyBriefUsingPOST,getCertUsingPOST,getConfigUsingPOST,getCompanyDetailUsingPOST,getCategoryUsingPOST,getTypeListUsingPOST,companyUsingPOST,getCompanyUsingPOST,redBlackUsingPOST}
     }
  
     function PlyProductWebController_TRACEH5 (target) {
       
      /**
      * 追溯码查询产品信息
      */
      function getProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码分页查询农事信息
      */
      function getFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/farming',params:{...paramsData},...info}
          }
      }
      /**
      * 包装信息
      */
      function packagingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/package',params:{...paramsData},...info}
          }
      }
      /**
      * 采摘信息
      */
      function pickUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/pick',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体产品列表
      */
      function infolistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/productList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产品追溯码分页
      */
      function pageFeignsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/productTrace',params:{...paramsData},...info}
          }
      }
      /**
      * 分拣信息
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/web/product/sort',params:{...paramsData},...info}
          }
      }
       return {getProductUsingPOST,getFarmingUsingPOST,packagingUsingPOST,pickUsingPOST,infolistUsingPOST,pageFeignsUsingPOST,sortUsingPOST}
     }
  
     function YellowPageController_TRACEH5 (target) {
       
      /**
      * 企业黄页刷新缓存
      */
      function refreshUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/yellowPage/refresh',params:{...paramsData},...info}
          }
      }
      /**
      * 企业黄页
      */
      function indexUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/H5/{id}',params:{...paramsData},...info}
          }
      }
       return {refreshUsingPOST,indexUsingGET}
     }
  
  
    
     function InputsUsageController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/inputsUsage/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function LtlInputController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInput/getDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInput/getList',params:{...paramsData},...info}
          }
      }
       return {getDetailUsingPOST,getListUsingPOST}
     }
  
     function LtlInputCdController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function getListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputCd/getList',params:{...paramsData},...info}
          }
      }
       return {getListUsingPOST}
     }
  
     function LtlInputOutEnterController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/add',params:{...paramsData},...info}
          }
      }
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputOutEnter/list',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,listUsingPOST}
     }
  
     function LtlInputStockController_TRACEPRO (target) {
       
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputStock/list',params:{...paramsData},...info}
          }
      }
       return {listUsingPOST}
     }
  
     function LtlInputTypeController_TRACEPRO (target) {
       
      /**
      * 投入品类型下拉列表
      */
      function getTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/pro/ltlInputType/getTypeToList',params:{...paramsData},...info}
          }
      }
       return {getTypeUsingPOST}
     }
  
  
    
     function FarmlandController_TRACECOMPANY (target) {
       
      /**
      * 添加基地对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/addBase',params:{...paramsData},...info}
          }
      }
      /**
      * 删除基地信息
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 基地详细信息
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/detail',params:{...paramsData},...info}
          }
      }
      /**
      * excel导出
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/excelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地地块级联
      */
      function getBaseAndMassifUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getBaseAndMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地下拉
      */
      function getBaseListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getBaseList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询主体地址
      */
      function getCompanyAddressUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getCompanyAddress',params:{...paramsData},...info}
          }
      }
      /**
      * 获取本企业最新的基地
      */
      function getLastestBaseUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/getLastestBase',params:{...paramsData},...info}
          }
      }
      /**
      * 获取基地列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监管获取基地列表
      */
      function page2UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/list2',params:{...paramsData},...info}
          }
      }
      /**
      * 查询地块名称
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/selectBlockNum',params:{...paramsData},...info}
          }
      }
      /**
      * 更新基地信息
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/base/updateBase',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,excelWriterUsingPOST,getBaseAndMassifUsingPOST,getBaseListUsingPOST,getCompanyAddressUsingPOST,getLastestBaseUsingPOST,pageUsingPOST,page2UsingPOST,selectBatchNumUsingPOST,updateUsingPOST}
     }
  
     function TraceBatchController_TRACECOMPANY (target) {
       
      /**
      * 新增对象
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批次下拉不分页
      */
      function batchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/batchList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取包含农事的产品批次
      */
      function batchListByFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/batchListByFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 关闭
      */
      function closedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/closed',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 明细对象
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/get',params:{...paramsData},...info}
          }
      }
      /**
      * 根据主体，分页集合
      */
      function listMcidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/list',params:{...paramsData},...info}
          }
      }
      /**
      * 批次农事记录
      */
      function listFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/listFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 批次自检报告
      */
      function listReportUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/listReport',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询批次list
      */
      function selectBatchListByProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/selectBatchListByProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 查询批次数
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/selectBatchNum',params:{...paramsData},...info}
          }
      }
      /**
      * 修改对象
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/batch/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchListUsingPOST,batchListByFarmingUsingPOST,closedUsingPOST,delUsingPOST,delMoreUsingPOST,detailUsingPOST,listMcidUsingPOST,listFarmingUsingPOST,listReportUsingPOST,selectBatchListByProductUsingPOST,selectBatchNumUsingPOST,updateUsingPOST}
     }
  
     function CategoryController_TRACECOMPANY (target) {
       
      /**
      * 新增我的类别
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/add',params:{...paramsData},...info}
          }
      }
      /**
      * categoryList列表
      */
      function categoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/categoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 检查类别code是否重复
      */
      function checkUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/check',params:{...paramsData},...info}
          }
      }
      /**
      * 检查all_name是否重复
      */
      function checkAllNameUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/checkAllName',params:{...paramsData},...info}
          }
      }
      /**
      * 检查owner是否重复
      */
      function checkOwnerUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/checkOwner',params:{...paramsData},...info}
          }
      }
      /**
      * 删除我的类别数据
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/category/delete',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,categoryListUsingPOST,checkUsingGET,checkAllNameUsingGET,checkOwnerUsingGET,deleteUsingPOST}
     }
  
     function TraceCodeChartController_TRACECOMPANY (target) {
       
      /**
      * 获取总追溯码数量
      */
      function getSumCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/codeChart/getSumCode',params:{...paramsData},...info}
          }
      }
       return {getSumCodeUsingPOST}
     }
  
     function FarmOtherInspectionController_TRACECOMPANY (target) {
       
      /**
      * 第三方检测报告同步
      */
      function downloadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/download',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 模糊检测名称查询下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/list',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmOtherInspection/page',params:{...paramsData},...info}
          }
      }
       return {downloadUsingPOST,insertUsingPOST,listUsingPOST,pageUsingPOST}
     }
  
     function FarmPackingController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据包装产品id查询批次列表
      */
      function selectBatchListByProductIdPackUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/selectBatchListByProductIdPack',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPacking/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdPackUsingPOST,updateUsingPOST}
     }
  
     function FarmPickController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 地块列表
      */
      function dkListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/dkList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询地块和产品
      */
      function selectBatchListByProductIdUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/selectBatchListByProductId',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmPick/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,dkListUsingPOST,pageUsingPOST,selectBatchListByProductIdUsingPOST,updateUsingPOST}
     }
  
     function FarmSalesRecordController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据销售产品id查询批次列表
      */
      function selectBatchListByProductIdSalesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectBatchListByProductIdSales',params:{...paramsData},...info}
          }
      }
      /**
      * 交易方式列表
      */
      function selectTransactionModeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectTransactionMode',params:{...paramsData},...info}
          }
      }
      /**
      * 查询购买单位
      */
      function selectUnitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/selectUnit',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSalesRecord/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdSalesUsingPOST,selectTransactionModeUsingPOST,selectUnitUsingPOST,updateUsingPOST}
     }
  
     function FarmSortingController_TRACECOMPANY (target) {
       
      /**
      * 新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/page',params:{...paramsData},...info}
          }
      }
      /**
      * 根据分拣产品id查询批次列表
      */
      function selectBatchListByProductIdSortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/selectBatchListByProductIdSort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmSorting/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,detailUsingPOST,pageUsingPOST,selectBatchListByProductIdSortUsingPOST,updateUsingPOST}
     }
  
     function FarmingController_TRACECOMPANY (target) {
       
      /**
      * 农事新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function codeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/codeList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/detail',params:{...paramsData},...info}
          }
      }
      /**
      * excel导出
      */
      function excelWriterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/excelWriter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取农事操作类型-全部
      */
      function farmingTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/farmingTypeAll',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品
      */
      function findInputsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/findInputs',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品单位
      */
      function findUnitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/findUnit',params:{...paramsData},...info}
          }
      }
      /**
      * 新增  新
      */
      function insertNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/insertNew',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/list',params:{...paramsData},...info}
          }
      }
      /**
      * 农事列表
      */
      function listListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/listList',params:{...paramsData},...info}
          }
      }
      /**
      * 更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farming/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,codeListUsingPOST,deleteBatchUsingPOST,detailUsingPOST,excelWriterUsingPOST,farmingTypeUsingPOST,findInputsUsingPOST,findUnitUsingPOST,insertNewUsingPOST,listUsingPOST,listListUsingPOST,updateUsingPOST}
     }
  
     function FarmingLogController_TRACECOMPANY (target) {
       
      /**
      * 农事日志新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/add',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志删除接口
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/del',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志下拉接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/list',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/page',params:{...paramsData},...info}
          }
      }
      /**
      * 农事日志更新接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingLog/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FarmingTypeController_TRACECOMPANY (target) {
       
      /**
      * 农事类型新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/disableBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型下拉不分页
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/farmingTypeList',params:{...paramsData},...info}
          }
      }
      /**
      * 农事类型列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmingType/list',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteBatchUsingPOST,detailUsingPOST,disableBatchUsingPOST,listUsingPOST,listUsingPOST}
     }
  
     function FarmlandBlockController_TRACECOMPANY (target) {
       
      /**
      * 新增地块
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/addMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 逻辑删除地块信息
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/deleteByBbmid',params:{...paramsData},...info}
          }
      }
      /**
      * 地块详细信息
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/massifDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据产品id查询基地id name
      */
      function selectFarmlandByProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/selectFarmlandByProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 更新地块信息
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/farmlandBlock/updateMassif',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,selectFarmlandByProductUsingPOST,updateUsingPOST}
     }
  
     function PatrolTemplateItemController_TRACECOMPANY (target) {
       
      /**
      * 停用启用目录
      */
      function patrolTemplateItemableUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/able',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检查表检查项
      */
      function patrolTemplateItemaddUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检查表检查项
      */
      function patrolTemplateItemdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项详情
      */
      function patrolTemplateItemdetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项list树形结构只有启用选项
      */
      function patrolTemplateItemlisttreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/listtree',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表检查项list树形结构拥有禁用选项
      */
      function patrolTemplateItemlisttree1UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/listtreedisable',params:{...paramsData},...info}
          }
      }
      /**
      * 排序更改
      */
      function patrolTemplateItemsortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/sort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改检查表检查项
      */
      function patrolTemplateItemupdateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checkitem/update',params:{...paramsData},...info}
          }
      }
       return {patrolTemplateItemableUsingPOST,patrolTemplateItemaddUsingPOST,patrolTemplateItemdelUsingPOST,patrolTemplateItemdetailUsingPOST,patrolTemplateItemlisttreeUsingPOST,patrolTemplateItemlisttree1UsingPOST,patrolTemplateItemsortUsingPOST,patrolTemplateItemupdateUsingPOST}
     }
  
     function PatrolTemplateController_TRACECOMPANY (target) {
       
      /**
      * 新增检查表
      */
      function addPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检查表
      */
      function deletePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/del',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表详情
      */
      function detailPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function enablePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/enable',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表list
      */
      function listPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表分页
      */
      function pagePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查看检查表
      */
      function selectChecklistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/selectChecklist',params:{...paramsData},...info}
          }
      }
      /**
      * 修改检查表
      */
      function updatePatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/checklist/update',params:{...paramsData},...info}
          }
      }
       return {addPatrolTemplateActionUsingPOST,deletePatrolTemplateActionUsingPOST,detailPatrolTemplateActionUsingPOST,enablePatrolTemplateActionUsingPOST,listPatrolTemplateActionUsingPOST,pagePatrolTemplateActionUsingPOST,selectChecklistUsingPOST,updatePatrolTemplateActionUsingPOST}
     }
  
     function PatrolController_TRACECOMPANY (target) {
       
      /**
      * 巡更记录增加
      */
      function addPatrolUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/add',params:{...paramsData},...info}
          }
      }
      /**
      * 查看报告
      */
      function selectChecklistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/checkReport',params:{...paramsData},...info}
          }
      }
      /**
      * 根据单位权限查询区域
      */
      function getRegionListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/getRegionList',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更记录表分页
      */
      function pagePatrolUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/page',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更记录表分页
      */
      function pagePatrolNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrol/pagePatrolNew',params:{...paramsData},...info}
          }
      }
       return {addPatrolUsingPOST,selectChecklistUsingPOST,getRegionListUsingPOST,pagePatrolUsingPOST,pagePatrolNewUsingPOST}
     }
  
     function PatrolTaskController_TRACECOMPANY (target) {
       
      /**
      * 新增巡更任务
      */
      function addPatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/add',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更完成
      */
      function patrolTaskCompleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/complete',params:{...paramsData},...info}
          }
      }
      /**
      * 作废巡更任务
      */
      function delPatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除作废的巡更任务
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 检查表详情
      */
      function detailPatrolTemplateActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更表分页
      */
      function pagePatrolTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/page',params:{...paramsData},...info}
          }
      }
      /**
      * 撤回巡更任务
      */
      function recallUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/recall',params:{...paramsData},...info}
          }
      }
      /**
      * 任务下拉
      */
      function taskListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/taskList',params:{...paramsData},...info}
          }
      }
      /**
      * 修改巡更任务
      */
      function updatePatrolTaskActionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/firm/patrolTask/update',params:{...paramsData},...info}
          }
      }
       return {addPatrolTaskActionUsingPOST,patrolTaskCompleteUsingPOST,delPatrolTaskActionUsingPOST,deleteUsingPOST,detailPatrolTemplateActionUsingPOST,pagePatrolTaskUsingPOST,recallUsingPOST,taskListUsingPOST,updatePatrolTaskActionUsingPOST}
     }
  
     function InputsStockController_TRACECOMPANY (target) {
       
      /**
      * 投入品库存分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStock/page',params:{...paramsData},...info}
          }
      }
       return {pageUsingPOST}
     }
  
     function InputsStockHistoryController_TRACECOMPANY (target) {
       
      /**
      * 投入品库存新增接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/add',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品库存详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品库存分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inputsStockHistory/page',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,detailUsingPOST,pageUsingPOST}
     }
  
     function FarmProductInspectionController_TRACECOMPANY (target) {
       
      /**
      * 第三方检测新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/add',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/page',params:{...paramsData},...info}
          }
      }
      /**
      * 第三方检测更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/inspection/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function PatrolChartController_TRACECOMPANY (target) {
       
      /**
      * 异常项解析
      */
      function getAnomUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnom',params:{...paramsData},...info}
          }
      }
      /**
      * 异常项解析
      */
      function getAnomDayUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomDay',params:{...paramsData},...info}
          }
      }
      /**
      * 本月异常项解析
      */
      function getAnomDaySumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomDaySum',params:{...paramsData},...info}
          }
      }
      /**
      * 异常项分页
      */
      function getAnomPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomPage',params:{...paramsData},...info}
          }
      }
      /**
      * 本月异常项解析
      */
      function getAnomSumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getAnomSum',params:{...paramsData},...info}
          }
      }
      /**
      * 获取最上面的四个小卡片
      */
      function getChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getChart',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更次数趋势
      */
      function getPatrolCountUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getPatrolCount',params:{...paramsData},...info}
          }
      }
      /**
      * 个人巡更次数排名
      */
      function getPatrolPersonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getPatrolPerson',params:{...paramsData},...info}
          }
      }
      /**
      * 
巡更主体占比
      */
      function getRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/patrolChart/getRate',params:{...paramsData},...info}
          }
      }
       return {getAnomUsingPOST,getAnomDayUsingPOST,getAnomDaySumUsingPOST,getAnomPageUsingPOST,getAnomSumUsingPOST,getChartUsingPOST,getPatrolCountUsingPOST,getPatrolPersonUsingPOST,getRateUsingPOST}
     }
  
     function ProductController_TRACECOMPANY (target) {
       
      /**
      * 农产品新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/add',params:{...paramsData},...info}
          }
      }
      /**
      * 验证农产品名是否重复
      */
      function checkProductUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/checkProduct',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 证书列表
      */
      function getCertifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getCertifyList',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品首页列表
      */
      function homeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/homeList',params:{...paramsData},...info}
          }
      }
      /**
      * 信息服务主体列表
      */
      function infolistUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/infolist',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/list',params:{...paramsData},...info}
          }
      }
      /**
      * 监管农产品列表
      */
      function list2UsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/list2',params:{...paramsData},...info}
          }
      }
      /**
      * 农产品下拉不分页
      */
      function productListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/productList',params:{...paramsData},...info}
          }
      }
      /**
      * 查询产品追溯码分页
      */
      function pageFeignsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/productTrace',params:{...paramsData},...info}
          }
      }
      /**
      * 查询地块数
      */
      function selectBatchNumUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/selectDetailById',params:{...paramsData},...info}
          }
      }
      /**
      * 更新产品的三品一标
      */
      function updateCertifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/updateCertifyList',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkProductUsingPOST,deleteBatchUsingPOST,detailUsingPOST,getCertifyListUsingPOST,homeListUsingPOST,infolistUsingPOST,listUsingPOST,list2UsingPOST,productListUsingPOST,pageFeignsUsingPOST,selectBatchNumUsingPOST,updateCertifyListUsingPOST}
     }
  
     function ProductCategoryController_TRACECOMPANY (target) {
       
      /**
      * 级联一次性查出所有
      */
      function getPlyProductClassifyListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/product/getPlyProductClassifyList',params:{...paramsData},...info}
          }
      }
       return {getPlyProductClassifyListUsingPOST}
     }
  
     function DataStatisticsController_TRACECOMPANY (target) {
       
      /**
      * 主体统计图饼图统计信息
      */
      function companyChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyChart',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图头部统计信息
      */
      function companyHeaderUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyHeader',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图地区划分统计信息
      */
      function companyRegionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyRegion',params:{...paramsData},...info}
          }
      }
      /**
      * 主体统计图底部分类统计信息
      */
      function companyTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/companyType',params:{...paramsData},...info}
          }
      }
      /**
      * 近3年连续企业
      */
      function getCreditListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditList',params:{...paramsData},...info}
          }
      }
      /**
      * 近3年连续企业
      */
      function getCreditPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditPage',params:{...paramsData},...info}
          }
      }
      /**
      * 企业等级分布情况
      */
      function getCreditRankUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditRank',params:{...paramsData},...info}
          }
      }
      /**
      * 信用企业分析上面7个小版块
      */
      function getCreditRateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/statistics/getCreditRate',params:{...paramsData},...info}
          }
      }
       return {companyChartUsingPOST,companyHeaderUsingPOST,companyRegionUsingPOST,companyTypeUsingPOST,getCreditListUsingPOST,getCreditPageUsingPOST,getCreditRankUsingPOST,getCreditRateUsingPOST}
     }
  
     function TraceApplyController_TRACECOMPANY (target) {
       
      /**
      * 追溯码申请
      */
      function applyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/apply',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码审核
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/audit',params:{...paramsData},...info}
          }
      }
      /**
      * 审核详情页
      */
      function auditDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/auditDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码审核列表
      */
      function auditUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/auditList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 申请详情页
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码首页列表
      */
      function homeListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/homeList',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码申请列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/list',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码保存
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceApply/update',params:{...paramsData},...info}
          }
      }
       return {applyUsingPOST,auditUsingPOST,auditDetailUsingPOST,auditUsingPOST,deleteBatchUsingPOST,detailUsingPOST,homeListUsingPOST,listUsingPOST,updateUsingPOST}
     }
  
     function TraceCodeController_TRACECOMPANY (target) {
       
      /**
      * 生成追溯码，打印数量，返回追溯码集合
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/add',params:{...paramsData},...info}
          }
      }
      /**
      * 所有主体的追溯码管理列表
      */
      function allListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/allList',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 该主体下追溯码管理列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/list',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码打印
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/print',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 农业追溯接口上传数据
      */
      function traceUploadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/traceUpload',params:{...paramsData},...info}
          }
      }
      /**
      * 溯源上报列表 
      */
      function webserviceTraceListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/webserviceTraceList',params:{...paramsData},...info}
          }
      }
      /**
      * yinfeng 详细内容xml文件
      */
      function webserviceXmlUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceCode/xml/{code}',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,allListUsingPOST,detailUsingPOST,listUsingPOST,updateUsingPOST,traceUploadUsingPOST,webserviceTraceListUsingPOST,webserviceXmlUsingGET}
     }
  
     function TraceTemplateController_TRACECOMPANY (target) {
       
      /**
      * 新增模板
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 该主体下追溯码管理列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/list',params:{...paramsData},...info}
          }
      }
      /**
      * 二维码列表
      */
      function templateListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/templateList',params:{...paramsData},...info}
          }
      }
      /**
      * 新增模板
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/traceTemplate/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteBatchUsingPOST,detailUsingPOST,listUsingPOST,templateListUsingPOST,updateUsingPOST}
     }
  
     function UpmsCategoryController_TRACECOMPANY (target) {
       
      /**
      * 根据产品类别展示产品单位
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/upmsCategory/selectCategory',params:{...paramsData},...info}
          }
      }
       return {selectCategoryUsingPOST}
     }
  
     function WebServiceQuickController_TRACECOMPANY (target) {
       
      /**
      * 检测数据查询接口
      */
      function selectQuickListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/webservicequick/selectQuickList',params:{...paramsData},...info}
          }
      }
      /**
      * 批量上报
      */
      function uploadManyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/webservicequick/uploadMany',params:{...paramsData},...info}
          }
      }
       return {selectQuickListUsingPOST,uploadManyUsingPOST}
     }
  
     function WorkBenchController_TRACECOMPANY (target) {
       
      /**
      * 中间各个区的group by
      */
      function getMapCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码地图
      */
      function getMapTraceCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapTraceCode',params:{...paramsData},...info}
          }
      }
      /**
      * 三品一标地图
      */
      function getMapVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getMapVertify',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡查统计数据
      */
      function getPatrolDataUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getPatrolData',params:{...paramsData},...info}
          }
      }
      /**
      * 巡更巡查地图
      */
      function getPatrolMapUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getPatrolMap',params:{...paramsData},...info}
          }
      }
      /**
      * 右边3个
      */
      function rightChartUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码右边3个
      */
      function getRightTraceCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightTraceCode',params:{...paramsData},...info}
          }
      }
      /**
      * 三品一标右边
      */
      function getRightVertifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/workBench/getRightVertify',params:{...paramsData},...info}
          }
      }
       return {getMapCompanyUsingPOST,getMapTraceCodeUsingPOST,getMapVertifyUsingPOST,getPatrolDataUsingPOST,getPatrolMapUsingPOST,rightChartUsingPOST,getRightTraceCodeUsingPOST,getRightVertifyUsingPOST}
     }
  
     function YellowPageController_TRACECOMPANY (target) {
       
      /**
      * 验证该企业是否开通黄页
      */
      function checkUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/check',params:{...paramsData},...info}
          }
      }
      /**
      * 验证域名
      */
      function checkDomainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/checkDomain',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 注册 申请域名
      */
      function checkDomainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/register',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页更新
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/update',params:{...paramsData},...info}
          }
      }
      /**
      * 黄页更新updateCompanyVO
      */
      function updateCompanyVOUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPage/updateCompanyVO',params:{...paramsData},...info}
          }
      }
       return {checkUsingPOST,checkDomainUsingPOST,detailUsingPOST,checkDomainUsingPOST,updateUsingPOST,updateCompanyVOUsingPOST}
     }
  
     function YellowPageBannerController_TRACECOMPANY (target) {
       
      /**
      * banner delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/delete',params:{...paramsData},...info}
          }
      }
      /**
      * banner insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/insert',params:{...paramsData},...info}
          }
      }
      /**
      * banner update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageBanner/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageDevController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageDev/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageFarmlandController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageFarmland/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
     function YellowPageHonorController_TRACECOMPANY (target) {
       
      /**
      * delete
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/delete',params:{...paramsData},...info}
          }
      }
      /**
      * insert
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/insert',params:{...paramsData},...info}
          }
      }
      /**
      * update
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/trace/company/yellowPageHonor/update',params:{...paramsData},...info}
          }
      }
       return {deleteUsingPOST,insertUsingPOST,updateUsingPOST}
     }
  
  
    
     function UuaAppCenterController_ADMIN (target) {
       
      /**
      * 新增应用
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/add',params:{...paramsData},...info}
          }
      }
      /**
      * 判断应用编号是否被占用
      */
      function checkAppCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/checkAppCode',params:{...paramsData},...info}
          }
      }
      /**
      * 判断应用名称是否被占用
      */
      function checkAppNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/checkAppName',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/del',params:{...paramsData},...info}
          }
      }
      /**
      * 查看详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/getAppCenterList',params:{...paramsData},...info}
          }
      }
      /**
      * 用户应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/info',params:{...paramsData},...info}
          }
      }
      /**
      * 应用分页查询
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/page',params:{...paramsData},...info}
          }
      }
      /**
      * 修改应用
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/application/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,checkAppCodeUsingPOST,checkAppNameUsingPOST,deleteUsingPOST,detailUsingPOST,getAppCenterListUsingPOST,getAppCenterListUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function UuaAppCenterModularController_ADMIN (target) {
       
      /**
      * 新增应用
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/add',params:{...paramsData},...info}
          }
      }
      /**
      * 删除应用
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/del',params:{...paramsData},...info}
          }
      }
      /**
      * 取消模块关联
      */
      function delModularForCenterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/delModularForCenter',params:{...paramsData},...info}
          }
      }
      /**
      * 查看应用
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/list',params:{...paramsData},...info}
          }
      }
      /**
      * 应用下模块列表排序接口
      */
      function modularSortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/modularSort',params:{...paramsData},...info}
          }
      }
      /**
      * 修改应用
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/appmodular/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,delUsingPOST,delModularForCenterUsingPOST,detailUsingPOST,listUsingPOST,modularSortUsingPOST,updateUsingPOST}
     }
  
     function AuthorityController_ADMIN (target) {
       
      /**
      * 新增组织机构权限
      */
      function addAuthToOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/addAuthToOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 新增角色权限
      */
      function addRoleAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/addRoleAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该角色下的权限集合
      */
      function getAppUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getApp',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCenterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getAppCenter',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getCenterModular',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该组织机构下的权限集合
      */
      function getOrgOwnAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getOrgOwnAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取该角色下的权限集合
      */
      function getRoleOwnAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/auth/getRoleOwnAuth',params:{...paramsData},...info}
          }
      }
       return {addAuthToOrgUsingPOST,addRoleAuthUsingPOST,getAppUsingPOST,getAppCenterUsingPOST,getCenterModularUsingPOST,getOrgOwnAuthUsingPOST,getRoleOwnAuthUsingPOST}
     }
  
     function AppAuthController_ADMIN (target) {
       
      /**
      * 增加角色权限
      */
      function addAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/addAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/getAuthByRole',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/getCenterModularNew',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下所有权限，根据应用分级
      */
      function selectAuthByRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/authNew/selectAuthByRole',params:{...paramsData},...info}
          }
      }
       return {addAuthUsingPOST,getAuthByRoleUsingPOST,getCenterModularNewUsingPOST,selectAuthByRoleUsingPOST}
     }
  
     function UuaButtonController_ADMIN (target) {
       
      /**
      * 按钮新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 根据功能ID查询该功能所有按钮
      */
      function menuButsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/menuButs',params:{...paramsData},...info}
          }
      }
      /**
      * 按钮分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/page',params:{...paramsData},...info}
          }
      }
      /**
      * 按钮修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/button/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,detailUsingPOST,menuButsUsingGET,menuPageUsingPOST,updateUsingPOST}
     }
  
     function UuaAppCenterAuthController_ADMIN (target) {
       
      /**
      * 新增应用接口
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/add',params:{...paramsData},...info}
          }
      }
      /**
      * 停用/启用接口
      */
      function enableOrDisableUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/enableOrDisable',params:{...paramsData},...info}
          }
      }
      /**
      * 批量停用/启用接口
      */
      function enableOrDisableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/enableOrDisableBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 编辑回显app应用
      */
      function getAppAuthUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/getAppAuth',params:{...paramsData},...info}
          }
      }
      /**
      * 分页接口
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/page',params:{...paramsData},...info}
          }
      }
      /**
      * 更新应用接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/centerAuth/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,enableOrDisableUsingPOST,enableOrDisableBatchUsingPOST,getAppAuthUsingPOST,pageUsingPOST,updateUsingPOST}
     }
  
     function FunctionAreaController_ADMIN (target) {
       
      /**
      * 新增功能区
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/add',params:{...paramsData},...info}
          }
      }
      /**
      * 新增主体功能区
      */
      function addCompanyAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/addCompanyArea',params:{...paramsData},...info}
          }
      }
      /**
      * 获取属于该功能区的主体信息
      */
      function belongAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/belongArea',params:{...paramsData},...info}
          }
      }
      /**
      * 删除接口
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除主体功能区
      */
      function delCompanyAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/delCompanyArea',params:{...paramsData},...info}
          }
      }
      /**
      * 详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用/禁用接口
      */
      function disabledUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/disabled',params:{...paramsData},...info}
          }
      }
      /**
      * 获取树形下拉
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/list',params:{...paramsData},...info}
          }
      }
      /**
      * 点击加载树
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 功能区分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/page',params:{...paramsData},...info}
          }
      }
      /**
      * 获取不属于该功能区的主体信息
      */
      function unBelongAreaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/unBelongArea',params:{...paramsData},...info}
          }
      }
      /**
      * 更新功能区接口
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/functionArea/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addCompanyAreaUsingPOST,belongAreaUsingPOST,delUsingPOST,delCompanyAreaUsingPOST,detailUsingPOST,disabledUsingPOST,listUsingPOST,listTreeUsingPOST,pageUsingPOST,unBelongAreaUsingPOST,updateUsingPOST}
     }
  
     function LogController_ADMIN (target) {
       
      /**
      * 根据ID删除日志
      */
      function deleteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/del',params:{...paramsData},...info}
          }
      }
      /**
      * 获取日志详情接口
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 日志分页
      */
      function logPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/log/page',params:{...paramsData},...info}
          }
      }
       return {deleteUsingGET,detailUsingPOST,logPageUsingPOST}
     }
  
     function MarkController_ADMIN (target) {
       
      /**
      * 添加标签
      */
      function addTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/addTag',params:{...paramsData},...info}
          }
      }
      /**
      * 删除标签
      */
      function delTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/delTag',params:{...paramsData},...info}
          }
      }
      /**
      * 获取企业标签
      */
      function getTagUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/tags',params:{...paramsData},...info}
          }
      }
      /**
      * 获取模板标签
      */
      function tempTagsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/mark/tempTags',params:{...paramsData},...info}
          }
      }
       return {addTagUsingPOST,delTagUsingPOST,getTagUsingPOST,tempTagsUsingPOST}
     }
  
     function UuaMenuController_ADMIN (target) {
       
      /**
      * 功能新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除/停用
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID批量删除/停用
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户菜单树型结构
      */
      function demoUserMenuUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/demoUserMenu',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 功能分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/page',params:{...paramsData},...info}
          }
      }
      /**
      * 查询未被选中的功能菜单
      */
      function selectMenuNoLinkedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/selectMenuNoLinked',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/update',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户菜单树型结构
      */
      function userMenuUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/menu/userMenu',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingPOST,delMoreUsingPOST,demoUserMenuUsingPOST,detailUsingPOST,menuPageUsingPOST,selectMenuNoLinkedUsingPOST,updateUsingPOST,userMenuUsingPOST}
     }
  
     function UuaAppModularController_ADMIN (target) {
       
      /**
      * 新增模块接口
      */
      function addModularUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/addModular',params:{...paramsData},...info}
          }
      }
      /**
      * 查询应用下面所有菜单列表
      */
      function getAppModuleListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getAppModuleList',params:{...paramsData},...info}
          }
      }
      /**
      * 查该应用下的所有pid=0的模块
      */
      function getAppModuleListByPidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getAppModuleListByPid',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片详情接口
      */
      function getCardDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getCardDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 模块功能树接口
      */
      function getModularFunctionListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/getModularFunctionList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取icon下拉
      */
      function iconListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/iconList',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片停用接口/模块功能删除接口
      */
      function modularDisabledUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/modularDisabled',params:{...paramsData},...info}
          }
      }
      /**
      * 查询应用下面所有菜单列表
      */
      function selectAppModularListByPUamidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/selectAppModularListByPUamid',params:{...paramsData},...info}
          }
      }
      /**
      * 模块卡片列表接口
      */
      function selectModularCardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/selectModularCard',params:{...paramsData},...info}
          }
      }
      /**
      * 排序接口
      */
      function sortUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/sort',params:{...paramsData},...info}
          }
      }
      /**
      * 更新卡片内容接口
      */
      function updateModularCardUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/modular/updateModularCard',params:{...paramsData},...info}
          }
      }
       return {addModularUsingPOST,getAppModuleListUsingPOST,getAppModuleListByPidUsingPOST,getCardDetailUsingPOST,getModularFunctionListUsingPOST,iconListUsingPOST,modularDisabledUsingPOST,selectAppModularListByPUamidUsingPOST,selectModularCardUsingPOST,sortUsingPOST,updateModularCardUsingPOST}
     }
  
     function UuaOrgController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/add',params:{...paramsData},...info}
          }
      }
      /**
      * addOrgRelation
      */
      function addOrgRelationUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/addOrgRelation',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 校验组织机构代码是否被使用
      */
      function checkCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/checkCode',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/disable',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function getUoCodeIsUsedUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/getUoCodeIsUsed',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/list',params:{...paramsData},...info}
          }
      }
      /**
      * 检测主体下拉（单位）列表
      */
      function listMonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listMon',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体下拉（单位）列表
      */
      function listOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 根据上级编号查询集合
      */
      function listPuoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listPuoid',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 农业主体下拉（单位）分頁
      */
      function PageOrgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/pageOrg',params:{...paramsData},...info}
          }
      }
      /**
      * 获取组织机构通讯录
      */
      function personNewsletterUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/personNewsletter',params:{...paramsData},...info}
          }
      }
      /**
      * shua
      */
      function shuaUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/shua',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树：返回 正常的组织机构数据
      */
      function uuaOrgTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/tree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/org/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addOrgRelationUsingPOST,batchdelUsingPOST,checkCodeUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,getUoCodeIsUsedUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listMonUsingPOST,listOrgUsingPOST,listPuoidUsingPOST,listTreeUsingPOST,PageOrgUsingPOST,personNewsletterUsingPOST,shuaUsingPOST,uuaOrgTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function OrgController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/add',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 获取部门
      */
      function findDeptUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/findDept',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/list',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgNew/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchdelUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,findDeptUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function UuaOrgRoleController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/add',params:{...paramsData},...info}
          }
      }
      /**
      * 批量创建
      */
      function addBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/addBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/del',params:{...paramsData},...info}
          }
      }
      /**
      * 删除
      */
      function delBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/delBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构角色集合
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgRole/list',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addBatchUsingPOST,delUsingPOST,delBatchUsingPOST,listUsingPOST}
     }
  
     function OrgSupeController_ADMIN (target) {
       
      /**
      * 创建
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/add',params:{...paramsData},...info}
          }
      }
      /**
      *  批量删除组织机构
      */
      function batchdelUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/batchdel',params:{...paramsData},...info}
          }
      }
      /**
      * 删除组织机构
      */
      function delUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/del',params:{...paramsData},...info}
          }
      }
      /**
      * 详细
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 获取部门
      */
      function findDeptUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/findDept',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/lazyTree',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构树
      */
      function lazyTreePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/lazyTreePage',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/list',params:{...paramsData},...info}
          }
      }
      /**
      * 列表
      */
      function listTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/listTree',params:{...paramsData},...info}
          }
      }
      /**
      * 修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/update',params:{...paramsData},...info}
          }
      }
      /**
      * 批量修改状态
      */
      function updateBatchStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/updateBatchState',params:{...paramsData},...info}
          }
      }
      /**
      * 修改状态
      */
      function updateStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/orgSupe/updateState',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,batchdelUsingPOST,delUsingPOST,detailUsingPOST,disableBatchUsingPOST,findDeptUsingPOST,lazyTreeUsingPOST,lazyTreePageUsingPOST,listUsingPOST,listTreeUsingPOST,updateUsingPOST,updateBatchStateUsingPOST,updateStateUsingPOST}
     }
  
     function UuaRoleController_ADMIN (target) {
       
      /**
      * 功能新增
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/add',params:{...paramsData},...info}
          }
      }
      /**
      * 角色分配权限---过时
      */
      function addMenuToRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/addMenuToRole',params:{...paramsData},...info}
          }
      }
      /**
      * 校验角色编码是否被使用
      */
      function checkUrCodeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/checkUrCode',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/delete',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 根据组织机构id查询旗下的所有角色
      */
      function getRoleByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/getRoleByUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 角色分页列表
      */
      function menuPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/page',params:{...paramsData},...info}
          }
      }
      /**
      * 监管角色分页列表
      */
      function supePageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/supePage',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/role/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,addMenuToRoleUsingPOST,checkUrCodeUsingPOST,deleteUsingPOST,deleteBatchUsingPOST,detailUsingPOST,disableBatchUsingPOST,getRoleByUoidUsingPOST,menuPageUsingPOST,supePageUsingPOST,updateUsingPOST}
     }
  
     function RouteController_ADMIN (target) {
       
      /**
      * 功能路由
      */
      function addUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/add',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/del',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 路由分页列表
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/page',params:{...paramsData},...info}
          }
      }
      /**
      * 刷新路由
      */
      function refreshRouteUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/refreshRoute',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/route/update',params:{...paramsData},...info}
          }
      }
       return {addUsingPOST,deleteUsingGET,detailUsingGET,pageUsingPOST,refreshRouteUsingGET,updateUsingPOST}
     }
  
     function UumUserSupeController_ADMIN (target) {
       
      /**
      * 新增
      */
      function addGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/addGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/addUserRelatedRole',params:{...paramsData},...info}
          }
      }
      /**
      * 批量关联用户组织机构
      */
      function batchGlUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/batchGlUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 批量移除用户组织机构
      */
      function batchYcUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/batchYcUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构用户集合
      */
      function listUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/listUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 单位权限下拉接口
      */
      function dataAuthListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/orgAuthList',params:{...paramsData},...info}
          }
      }
      /**
      * 政府用户分页列表
      */
      function pageGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/pageGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updatePassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updatePassWord',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户组织机构
      */
      function updateUumUserByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updateUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updateUserPassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/supeuser/updateUserPassWord',params:{...paramsData},...info}
          }
      }
       return {addGovernmentUsingPOST,addUserRelatedRoleUsingPOST,batchGlUoidUsingPOST,batchYcUoidUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,listUoidUsingPOST,dataAuthListUsingPOST,pageGovernmentUsingPOST,roleByUserUsingPOST,updateUsingPOST,updatePassWordUsingPOST,updateUumUserByUoidUsingPOST,updateUserPassWordUsingPOST}
     }
  
     function SysCategoryController_ADMIN (target) {
       
      /**
      * 新增右边的category
      */
      function addCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/addCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 新增左边的category
      */
      function addCommonUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/addCommon',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteCategoryBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/deleteCategoryBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteCommonBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/deleteCommonBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID停用
      */
      function disableCategoryBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/disableCategoryBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID停用
      */
      function disableCommonBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/disableCommonBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 传入多个category list列表不分页
      */
      function selectBatchCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectBatchCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表不分页
      */
      function selectCategoryUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategory',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category list列表
      */
      function selectCategoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 某个category tree列表
      */
      function selectCategoryTreeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryTree',params:{...paramsData},...info}
          }
      }
      /**
      * 条件查询category tree列表
      */
      function selectCategoryTreeByNameUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectCategoryTreeByName',params:{...paramsData},...info}
          }
      }
      /**
      * category不重复
      */
      function selectListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sysCategory/selectList',params:{...paramsData},...info}
          }
      }
       return {addCategoryUsingPOST,addCommonUsingPOST,deleteCategoryBatchUsingPOST,deleteCommonBatchUsingPOST,disableCategoryBatchUsingPOST,disableCommonBatchUsingPOST,selectBatchCategoryUsingPOST,selectCategoryUsingPOST,selectCategoryListUsingPOST,selectCategoryTreeUsingPOST,selectCategoryTreeByNameUsingPOST,selectListUsingPOST}
     }
  
     function SysRoleNewController_ADMIN (target) {
       
      /**
      * 角色分配权限---过时
      */
      function addMenuToRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/addMenuToRole',params:{...paramsData},...info}
          }
      }
      /**
      * 新增角色
      */
      function addRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/addRole',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色代码是否存在
      */
      function checkRoleCodeExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/checkRoleCodeExists/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色名称是否存在
      */
      function checkRoleNameExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/checkRoleNameExists/{roleName}',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/deleteRole',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查角色询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 查询跟角色绑定的用户信息
      */
      function findUserByRoleCodeUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/findUserByRoleCode/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCentersMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getAppCentersMain',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRolesMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getAuthByRolesMain',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewsMainUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/getCenterModularNewsMain',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询角色列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/list',params:{...paramsData},...info}
          }
      }
      /**
      * 角色每页显示条数
      */
      function rolepageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/rolepage',params:{...paramsData},...info}
          }
      }
      /**
      * 修改角色
      */
      function updateRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/updateRole',params:{...paramsData},...info}
          }
      }
      /**
      * 更新角色状态
      */
      function updateRoleStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_role/updateRoleState',params:{...paramsData},...info}
          }
      }
       return {addMenuToRoleUsingPOST,addRoleUsingPOST,checkRoleCodeExistsUsingGET,checkRoleNameExistsUsingGET,deleteBatchUsingPOST,deleteRoleUsingPOST,detailUsingPOST,disableBatchUsingPOST,findUserByRoleCodeUsingGET,getAppCentersMainUsingPOST,getAuthByRolesMainUsingPOST,getCenterModularNewsMainUsingPOST,listUsingPOST,rolepageUsingPOST,updateRoleUsingPOST,updateRoleStateUsingPOST}
     }
  
     function SysRoleNewsController_ADMIN (target) {
       
      /**
      * 新增角色
      */
      function addRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/addRole',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色代码是否存在
      */
      function checkRoleCodeExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/checkRoleCodeExists/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 检查角色名称是否存在
      */
      function checkRoleNameExistsUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/checkRoleNameExists/{roleName}',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/deleteBatch',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/deleteRole',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查角色询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 查询跟角色绑定的用户信息
      */
      function findUserByRoleCodeUsingGET(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/findUserByRoleCode/{urCode}',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用列表
      */
      function getAppCentersUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getAppCenters',params:{...paramsData},...info}
          }
      }
      /**
      * 获取角色下权限
      */
      function getAuthByRolesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getAuthByRoles',params:{...paramsData},...info}
          }
      }
      /**
      * 获取应用下的所有模块级联信息
      */
      function getCenterModularNewsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/getCenterModularNews',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询角色列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/list',params:{...paramsData},...info}
          }
      }
      /**
      * 角色每页显示条数
      */
      function rolepagesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/rolepages',params:{...paramsData},...info}
          }
      }
      /**
      * 修改角色
      */
      function updateRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/updateRole',params:{...paramsData},...info}
          }
      }
      /**
      * 更新角色状态
      */
      function updateRoleStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_roles/updateRoleState',params:{...paramsData},...info}
          }
      }
       return {addRoleUsingPOST,checkRoleCodeExistsUsingGET,checkRoleNameExistsUsingGET,deleteBatchUsingPOST,deleteRoleUsingPOST,detailUsingPOST,disableBatchUsingPOST,findUserByRoleCodeUsingGET,getAppCentersUsingPOST,getAuthByRolesUsingPOST,getCenterModularNewsUsingPOST,listUsingPOST,rolepagesUsingPOST,updateRoleUsingPOST,updateRoleStateUsingPOST}
     }
  
     function SysUserNewController_ADMIN (target) {
       
      /**
      * 添加icon
      */
      function addICONUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addICON',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function addUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addUser',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRolesUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/addUserRelatedRoles',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 分页查询用户列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/list',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/update',params:{...paramsData},...info}
          }
      }
      /**
      * 修改密码
      */
      function updatePassWordUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/updatePassWord',params:{...paramsData},...info}
          }
      }
      /**
      * 更新用户状态
      */
      function updateUserStateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/updateUserState',params:{...paramsData},...info}
          }
      }
      /**
      * 用户每页显示条数
      */
      function userpageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/sys_user/userpage',params:{...paramsData},...info}
          }
      }
       return {addICONUsingPOST,addUserUsingPOST,addUserRelatedRolesUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,listUsingPOST,roleByUserUsingPOST,updateUsingPOST,updatePassWordUsingPOST,updateUserStateUsingPOST,userpageUsingPOST}
     }
  
     function UumUserController_ADMIN (target) {
       
      /**
      * 新增
      */
      function addGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/addGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 角色用户关联接口
      */
      function addUserRelatedRoleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/addUserRelatedRole',params:{...paramsData},...info}
          }
      }
      /**
      * 用户应用查询
      */
      function getAppCenterListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/appInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 批量关联用户组织机构
      */
      function batchGlUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/batchGlUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 批量移除用户组织机构
      */
      function batchYcUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/batchYcUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权按钮查询
      */
      function getAppButtonListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/buttonInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 数据权限下拉接口
      */
      function dataAuthListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/dataAuthList',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID删除
      */
      function deleteUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/del',params:{...paramsData},...info}
          }
      }
      /**
      * 批量删除用户
      */
      function delMoreUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/delMore',params:{...paramsData},...info}
          }
      }
      /**
      * 根据ID查询详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 启用禁用
      */
      function disableBatchUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/disable',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户权限数据
      */
      function infoUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/info',params:{...paramsData},...info}
          }
      }
      /**
      * 组织机构用户集合
      */
      function listUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/listUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权菜单查询
      */
      function getAppMenuListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/menuInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 用户授权模块查询
      */
      function getAppModularListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/modularInfo',params:{...paramsData},...info}
          }
      }
      /**
      * 政府用户分页列表
      */
      function pageGovernmentUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/pageGovernment',params:{...paramsData},...info}
          }
      }
      /**
      * 根据用户ID查询用户所拥有的角色
      */
      function roleByUserUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/roleByUser',params:{...paramsData},...info}
          }
      }
      /**
      * 功能修改
      */
      function updateUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/update',params:{...paramsData},...info}
          }
      }
      /**
      * 更新头像
      */
      function updateHeadUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/updateHead',params:{...paramsData},...info}
          }
      }
      /**
      * 修改用户组织机构
      */
      function updateUumUserByUoidUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/updateUoid',params:{...paramsData},...info}
          }
      }
      /**
      * 获取用户下拉
      */
      function userListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/admin/user/userList',params:{...paramsData},...info}
          }
      }
       return {addGovernmentUsingPOST,addUserRelatedRoleUsingPOST,getAppCenterListUsingPOST,batchGlUoidUsingPOST,batchYcUoidUsingPOST,getAppButtonListUsingPOST,dataAuthListUsingPOST,deleteUsingPOST,delMoreUsingPOST,detailUsingPOST,disableBatchUsingPOST,infoUsingPOST,listUoidUsingPOST,getAppMenuListUsingPOST,getAppModularListUsingPOST,pageGovernmentUsingPOST,roleByUserUsingPOST,updateUsingPOST,updateHeadUsingPOST,updateUumUserByUoidUsingPOST,userListUsingPOST}
     }
  
  
    
     function PrintCodeController_APPFIRM (target) {
       
      /**
      * 获取包含农事的产品批次
      */
      function batchListByFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/code/batchListByFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 追溯码申请
      */
      function applyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/code/print',params:{...paramsData},...info}
          }
      }
       return {batchListByFarmingUsingPOST,applyUsingPOST}
     }
  
     function ElectronicAccountController_APPFIRM (target) {
       
      /**
      * 批次筛选条件
      */
      function batchConditionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/batchCondition',params:{...paramsData},...info}
          }
      }
      /**
      * 批次详情接口
      */
      function batchDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/batchDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 批次分页接口
      */
      function batchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/batchList',params:{...paramsData},...info}
          }
      }
      /**
      * 地块详情
      */
      function blockDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/blockDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 地块列表
      */
      function blockListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/blockList',params:{...paramsData},...info}
          }
      }
      /**
      * 产品分类筛选
      */
      function categoryListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/categoryList',params:{...paramsData},...info}
          }
      }
      /**
      * 农事操作记录分页
      */
      function farmingListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/farmingList',params:{...paramsData},...info}
          }
      }
      /**
      * 基地筛选条件集合
      */
      function farmlandConditionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/farmlandCondition',params:{...paramsData},...info}
          }
      }
      /**
      * 基地详情
      */
      function farmlandDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/farmlandDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 基地分页列表
      */
      function farmlandListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/farmlandList',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品筛选条件
      */
      function inputConditionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/inputCondition',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品详情
      */
      function inputDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/inputDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品列表详情
      */
      function inputListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/inputList',params:{...paramsData},...info}
          }
      }
      /**
      * 产品详情接口
      */
      function productDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/productDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 产品列表分页
      */
      function productListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/electronicAccount/productList',params:{...paramsData},...info}
          }
      }
       return {batchConditionUsingPOST,batchDetailUsingPOST,batchListUsingPOST,blockDetailUsingPOST,blockListUsingPOST,categoryListUsingPOST,farmingListUsingPOST,farmlandConditionUsingPOST,farmlandDetailUsingPOST,farmlandListUsingPOST,inputConditionUsingPOST,inputDetailUsingPOST,inputListUsingPOST,productDetailUsingPOST,productListUsingPOST}
     }
  
     function FarmingController_APPFIRM (target) {
       
      /**
      * 农事类型详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/farmDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 农事分页接口
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/farmingPage',params:{...paramsData},...info}
          }
      }
      /**
      * 农事操作类型
      */
      function farmingTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/farmingType',params:{...paramsData},...info}
          }
      }
      /**
      * 用法单位分类
      */
      function farmingUsingTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/farmingUsingType',params:{...paramsData},...info}
          }
      }
      /**
      * 扫一扫基地列表
      */
      function farmlandListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/farmlandList',params:{...paramsData},...info}
          }
      }
      /**
      * 根据包装条码查询投入品
      */
      function getInputUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/getInput',params:{...paramsData},...info}
          }
      }
      /**
      * 新增农事操作
      */
      function insertFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farming/insert',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,listUsingPOST,farmingTypeUsingPOST,farmingUsingTypeUsingPOST,farmlandListUsingPOST,getInputUsingPOST,insertFarmingUsingPOST}
     }
  
     function FarmingNewController_APPFIRM (target) {
       
      /**
      * 获取包含农事的产品批次
      */
      function batchListByFarmingUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/batchListByFarming',params:{...paramsData},...info}
          }
      }
      /**
      * 农事详情
      */
      function farmingDetailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/farmingDetail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取农事操作类型-全部
      */
      function farmingTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/farmingTypeAll',params:{...paramsData},...info}
          }
      }
      /**
      * 获取农事操作类型-常用
      */
      function farmingTypeOftenUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/farmingTypeOften',params:{...paramsData},...info}
          }
      }
      /**
      * 农事操作--基地地块级联(当前登录人)
      */
      function findBaseAndMassifUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findBaseAndMassif',params:{...paramsData},...info}
          }
      }
      /**
      * 扫一扫地块详情
      */
      function findBatchByBlockUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findBatchByBlock',params:{...paramsData},...info}
          }
      }
      /**
      * 获取批次基地地块信息
      */
      function findBatchFarmlandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findBatchFarmland',params:{...paramsData},...info}
          }
      }
      /**
      * 获取批次列表下拉
      */
      function findBatchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findBatchList',params:{...paramsData},...info}
          }
      }
      /**
      * 扫一扫基地地块列表
      */
      function findBlockByFarmlandUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findBlockByFarmland',params:{...paramsData},...info}
          }
      }
      /**
      * 农事记录列表
      */
      function findFarmingListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findFarmingList',params:{...paramsData},...info}
          }
      }
      /**
      * 获取投入品
      */
      function findInputsUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findInputs',params:{...paramsData},...info}
          }
      }
      /**
      * 投入品单位
      */
      function findUnitUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/findUnit',params:{...paramsData},...info}
          }
      }
      /**
      * 新增农事操作
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 更新农事操作常用/不常用
      */
      function updateTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/farmingNew/updateType',params:{...paramsData},...info}
          }
      }
       return {batchListByFarmingUsingPOST,farmingDetailUsingPOST,farmingTypeUsingPOST,farmingTypeOftenUsingPOST,findBaseAndMassifUsingPOST,findBatchByBlockUsingPOST,findBatchFarmlandUsingPOST,findBatchListUsingPOST,findBlockByFarmlandUsingPOST,findFarmingListUsingPOST,findInputsUsingPOST,findUnitUsingPOST,insertUsingPOST,updateTypeUsingPOST}
     }
  
     function InspectionController_APPFIRM (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/insert',params:{...paramsData},...info}
          }
      }
      /**
      * 检测列表
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/list',params:{...paramsData},...info}
          }
      }
      /**
      * 作废
      */
      function nullifyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/nullify',params:{...paramsData},...info}
          }
      }
      /**
      * 检测机构列表接口
      */
      function orgListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/orgList',params:{...paramsData},...info}
          }
      }
      /**
      * 检测项目列表接口
      */
      function programListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/programList',params:{...paramsData},...info}
          }
      }
      /**
      * 抽样方法下拉
      */
      function sampleMethodUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspection/sampleMethod',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,insertUsingPOST,listUsingPOST,nullifyUsingPOST,orgListUsingPOST,programListUsingPOST,sampleMethodUsingPOST}
     }
  
     function InspectionNewController_APPFIRM (target) {
       
      /**
      * 产品批次
      */
      function batchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/batchList',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测数据
      */
      function deleteReportUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/deleteReport',params:{...paramsData},...info}
          }
      }
      /**
      * 删除检测任务
      */
      function deleteTaskUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/deleteTask',params:{...paramsData},...info}
          }
      }
      /**
      * 批次下拉
      */
      function getBatchListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/getBatchList',params:{...paramsData},...info}
          }
      }
      /**
      * 新增检测任务
      */
      function insertInspectionUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/insertInspection',params:{...paramsData},...info}
          }
      }
      /**
      * 处理检测数据
      */
      function inspectionHandleUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/inspectionHandle',params:{...paramsData},...info}
          }
      }
      /**
      * 检测任务列表  新
      */
      function inspectionPageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/inspectionPage',params:{...paramsData},...info}
          }
      }
      /**
      * 检测任务列表
      */
      function taskListUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/inspectionNew/taskList',params:{...paramsData},...info}
          }
      }
       return {batchListUsingPOST,deleteReportUsingPOST,deleteTaskUsingPOST,getBatchListUsingPOST,insertInspectionUsingPOST,inspectionHandleUsingPOST,inspectionPageUsingPOST,taskListUsingPOST}
     }
  
     function UpyunUploadController_APPFIRM (target) {
       
      /**
      * 上传图片
      */
      function uploadImgUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/upyun/uploadImg',params:{...paramsData},...info}
          }
      }
      /**
      * 上传音频
      */
      function uploadVoiceUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/firm/upyun/uploadVoice',params:{...paramsData},...info}
          }
      }
       return {uploadImgUsingPOST,uploadVoiceUsingPOST}
     }
  
  
    
     function FirmAdvManagerController_APPINSUR (target) {
       
      /**
      * 顶部广告
      */
      function headerManagerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/headerManager',params:{...paramsData},...info}
          }
      }
      /**
      * 保险头条
      */
      function headlinesManagerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/headlinesManager',params:{...paramsData},...info}
          }
      }
      /**
      * 大牌制造
      */
      function insuranceCompanyUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/insuranceCompany',params:{...paramsData},...info}
          }
      }
      /**
      * 保险类型
      */
      function insuranceTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/insuranceType',params:{...paramsData},...info}
          }
      }
      /**
      * 通知公告
      */
      function noticeManagerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/noticeManager',params:{...paramsData},...info}
          }
      }
      /**
      * 优选推荐
      */
      function recommendUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/recommend',params:{...paramsData},...info}
          }
      }
      /**
      * 首页保险类型
      */
      function typeManagerUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmAdvManager/typeManager',params:{...paramsData},...info}
          }
      }
       return {headerManagerUsingPOST,headlinesManagerUsingPOST,insuranceCompanyUsingPOST,insuranceTypeUsingPOST,noticeManagerUsingPOST,recommendUsingPOST,typeManagerUsingPOST}
     }
  
     function FirmInsurController_APPINSUR (target) {
       
      /**
      * 公司详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsur/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 保险公司分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsur/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,pageUsingPOST}
     }
  
     function FirmInsurClassroomController_APPINSUR (target) {
       
      /**
      * 获取问题/小课堂详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurClassroom/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 获取问题/小课堂
      */
      function listUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurClassroom/list',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,listUsingPOST}
     }
  
     function FirmInsurDocumentController_APPINSUR (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurDocument/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 新增保单
      */
      function insertUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurDocument/insert',params:{...paramsData},...info}
          }
      }
      /**
      * xx保障中
      */
      function myCountUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurDocument/myCount',params:{...paramsData},...info}
          }
      }
      /**
      * 我的保单分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurDocument/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,insertUsingPOST,myCountUsingPOST,pageUsingPOST}
     }
  
     function FirmInsurHeadlinesController_APPINSUR (target) {
       
      /**
      * 头条详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurHeadlines/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 头条类型分类
      */
      function findTypeUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurHeadlines/findType',params:{...paramsData},...info}
          }
      }
      /**
      * 头条新闻分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurHeadlines/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,findTypeUsingPOST,pageUsingPOST}
     }
  
     function FirmInsuranceController_APPINSUR (target) {
       
      /**
      * 详情
      */
      function detailUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurance/detail',params:{...paramsData},...info}
          }
      }
      /**
      * 保险分页
      */
      function pageUsingPOST(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'/app/insur/firmInsurance/page',params:{...paramsData},...info}
          }
      }
       return {detailUsingPOST,pageUsingPOST}
     }
  
  
      export default {MblCompanyController_TRACEH5,InfController_TRACEH5,MainPageController_TRACEH5,PlyProductController_TRACEH5,ProcessController_TRACEH5,FarmRecordController_TRACEH5,SysCategoryController_H5_TRACEH5,UpyunUploadController_TRACEH5,UserController_TRACEH5,MblCompanyController_H5_TRACEH5,PlyProductWebController_TRACEH5,YellowPageController_TRACEH5,InputsUsageController_TRACEPRO,LtlInputController_TRACEPRO,LtlInputCdController_TRACEPRO,LtlInputOutEnterController_TRACEPRO,LtlInputStockController_TRACEPRO,LtlInputTypeController_TRACEPRO,FarmlandController_TRACECOMPANY,TraceBatchController_TRACECOMPANY,CategoryController_TRACECOMPANY,TraceCodeChartController_TRACECOMPANY,FarmOtherInspectionController_TRACECOMPANY,FarmPackingController_TRACECOMPANY,FarmPickController_TRACECOMPANY,FarmSalesRecordController_TRACECOMPANY,FarmSortingController_TRACECOMPANY,FarmingController_TRACECOMPANY,FarmingLogController_TRACECOMPANY,FarmingTypeController_TRACECOMPANY,FarmlandBlockController_TRACECOMPANY,PatrolTemplateItemController_TRACECOMPANY,PatrolTemplateController_TRACECOMPANY,PatrolController_TRACECOMPANY,PatrolTaskController_TRACECOMPANY,InputsStockController_TRACECOMPANY,InputsStockHistoryController_TRACECOMPANY,FarmProductInspectionController_TRACECOMPANY,PatrolChartController_TRACECOMPANY,ProductController_TRACECOMPANY,ProductCategoryController_TRACECOMPANY,DataStatisticsController_TRACECOMPANY,TraceApplyController_TRACECOMPANY,TraceCodeController_TRACECOMPANY,TraceTemplateController_TRACECOMPANY,UpmsCategoryController_TRACECOMPANY,WebServiceQuickController_TRACECOMPANY,WorkBenchController_TRACECOMPANY,YellowPageController_TRACECOMPANY,YellowPageBannerController_TRACECOMPANY,YellowPageDevController_TRACECOMPANY,YellowPageFarmlandController_TRACECOMPANY,YellowPageHonorController_TRACECOMPANY,UuaAppCenterController_ADMIN,UuaAppCenterModularController_ADMIN,AuthorityController_ADMIN,AppAuthController_ADMIN,UuaButtonController_ADMIN,UuaAppCenterAuthController_ADMIN,FunctionAreaController_ADMIN,LogController_ADMIN,MarkController_ADMIN,UuaMenuController_ADMIN,UuaAppModularController_ADMIN,UuaOrgController_ADMIN,OrgController_ADMIN,UuaOrgRoleController_ADMIN,OrgSupeController_ADMIN,UuaRoleController_ADMIN,RouteController_ADMIN,UumUserSupeController_ADMIN,SysCategoryController_ADMIN,SysRoleNewController_ADMIN,SysRoleNewsController_ADMIN,SysUserNewController_ADMIN,UumUserController_ADMIN,PrintCodeController_APPFIRM,ElectronicAccountController_APPFIRM,FarmingController_APPFIRM,FarmingNewController_APPFIRM,InspectionController_APPFIRM,InspectionNewController_APPFIRM,UpyunUploadController_APPFIRM,FirmAdvManagerController_APPINSUR,FirmInsurController_APPINSUR,FirmInsurClassroomController_APPINSUR,FirmInsurDocumentController_APPINSUR,FirmInsurHeadlinesController_APPINSUR,FirmInsuranceController_APPINSUR}
    