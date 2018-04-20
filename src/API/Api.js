import ajax from './ajax'

const AccountLogin = (data) => {
  return ajax('post', '/login', JSON.stringify(data))
}
const GetAuditList = (data) => {
  return ajax('get', '/audit/general', data)
}
const VetoAuditItem = (data) => {
  return ajax('delete_restful', '/audit/general', data)
}
const AgreeAuditItem = (data) => {
  return ajax('put_restful', '/audit/general', data)
}
const VetoTrade = (data) => {
  return ajax('delete_restful', '/audit/asset/', data)
}
const AgreeTrade = (data) => {
  return ajax('put_restful', '/audit/asset/', data)
}
const ResetCounter = () => {
  return ajax('put', '/reset/counter')
}
const GetNormalArticle = (data) => {
  return ajax('get', '/article/normal', data)
}
const GetStudentScore = (data) => {
  return ajax('get_restful', '/stu/score', data)
}
const UpdateStudentScore = (data) => {
  return ajax('put_restful', '/certificate/student', data)
}
const DownLoad = (data) => {
  return ajax('get', '', data)
}
const UpLoad = (data) => {
  return ajax('put', '', data)
}
const QiNiuDownLoad = (data) => {
  return ajax('get', '', data)
}
const GetStuInfoList = (data) => {
  return ajax('get', '/stu', data)
}
const GetTutorInfoList = (data) => {
  return ajax('get', '/tutor', data)
}
const GetStuInfo = (data) => {
  return ajax('get_restful', '/stu', data)
}
const GetTutorInfo = (data) => {
  return ajax('get_restful', '/tutor', data)
}
const GetSchoolList = () => {
  return ajax('get_conf', '/conf/school')
}
const AddSchoolList = (data) => {
  return ajax('post', '/conf/school', data)
}
const EditSchoolList = (data) => {
  return ajax('put_restful', '/conf/school', data)
}
const DeleteSchoolList = (data) => {
  return ajax('delete_restful', '/conf/school', data)
}
const GetDirectionList = () => {
  return ajax('get_conf', '/conf/direction')
}
const AddDirectionList = (data) => {
  return ajax('post', '/conf/direction', data)
}
const EditDirectionList = (data) => {
  return ajax('put_restful', '/conf/direction', data)
}
const DeleteDirectionList = (data) => {
  return ajax('delete_restful', '/conf/direction', data)
}
const GetTradeList = () => {
  return ajax('get_conf', '/conf/trade')
}
const AddTradeList = (data) => {
  return ajax('post', '/conf/trade', data)
}
const EditTradeList = (data) => {
  return ajax('put_restful', '/conf/trade', data)
}
const DeleteTradeList = (data) => {
  return ajax('delete_restful', '/conf/trade', data)
}
const GetQuestionList = () => {
  return ajax('get_conf', '/conf/question')
}
const AddProblemList = (data) => {
  return ajax('post', '/conf/question', data)
}
const EditQuestionList = (data) => {
  return ajax('put_restful', '/conf/question', data)
}
const DeleteQuestionList = (data) => {
  return ajax('delete_restful', '/conf/question', data)
}
const GetFlowerRateAndMaxFlowerPerYear = () => {
  return ajax('get', '/op')
}
const EditFlowerRateAndMaxFlowerPerYear = (data) => {
  return ajax('put', '/op', data)
}
const GetStuAnswer = (data) => {
  return ajax('get_restful', '/stu', data)
}
const GetArticleGarbage = (data) => {
  return ajax('get', '/article/garbage', data)
}
const DeleteArticle = (data) => {
  return ajax('delete_restful', '/article', data)
}
const GetWithdrawList = (data) => {
  return ajax('get', '/audit/asset', data)
}
const EditBanner = (data) => {
  return ajax('put', '/banner', data)
}
const CertificateTutor = (data) => {
  return ajax('post_restful', '/certificate/tutor', data)
}
const CancelCertificateTutor = (data) => {
  return ajax('delete_restful', '/certificate/tutor', data)
}
const EditStuPhone = (data) => {
  return ajax('put_restful', '/stu', data)
}
const EditTutorPhone = (data) => {
  return ajax('put_restful', '/tutor', data)
}
export {
  AccountLogin,
  GetAuditList,
  VetoAuditItem,
  AgreeAuditItem,
  ResetCounter,
  GetNormalArticle,
  GetStudentScore,
  UpdateStudentScore,
  GetStuInfoList,
  GetTutorInfoList,
  GetStuInfo,
  GetTutorInfo,
  GetSchoolList,
  GetDirectionList,
  GetQuestionList,
  GetTradeList,
  AddDirectionList,
  AddProblemList,
  AddSchoolList,
  AddTradeList,
  EditDirectionList,
  EditQuestionList,
  EditSchoolList,
  EditTradeList,
  DeleteDirectionList,
  DeleteQuestionList,
  DeleteSchoolList,
  DeleteTradeList,
  GetStuAnswer,
  GetFlowerRateAndMaxFlowerPerYear,
  EditFlowerRateAndMaxFlowerPerYear,
  GetArticleGarbage,
  DeleteArticle,
  GetWithdrawList,
  VetoTrade,
  AgreeTrade,
  EditBanner,
  CertificateTutor,
  CancelCertificateTutor,
  EditStuPhone,
  EditTutorPhone
}