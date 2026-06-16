(function(){
  'use strict';
  const KEY = 'computerNetworkFinalStudyData';
  const typeLabels = {
    'multiple-choice':'4지선다',
    'multi-select':'모두 고르기',
    'fill-blank':'빈칸',
    'short-answer':'단답형',
    'explain':'설명형'
  };
  function empty(){return {records:[],wrongNotes:[],summary:{total:0,correct:0,wrong:0,byChapter:{},byType:{}}};}
  function normalize(data){
    data = data && typeof data === 'object' ? data : empty();
    data.records = Array.isArray(data.records) ? data.records : [];
    data.wrongNotes = Array.isArray(data.wrongNotes) ? data.wrongNotes : [];
    data.summary = data.summary && typeof data.summary === 'object' ? data.summary : empty().summary;
    data.summary.total = Number(data.summary.total || 0);
    data.summary.correct = Number(data.summary.correct || 0);
    data.summary.wrong = Number(data.summary.wrong || 0);
    data.summary.byChapter = data.summary.byChapter || {};
    data.summary.byType = data.summary.byType || {};
    return data;
  }
  function read(){try{return normalize(JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){return empty();}}
  function write(data){localStorage.setItem(KEY, JSON.stringify(normalize(data)));}
  function clear(){localStorage.removeItem(KEY);}
  function rate(correct,total){return total ? Math.round(correct/total*100) : 0;}
  function formatValue(value){
    if (Array.isArray(value)) return value.map(formatValue).join(' / ');
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  }
  function formatQuestionAnswer(question, value){
    if (!question) return formatValue(value);
    if (question.type === 'multiple-choice') {
      const n = Number(value);
      return n ? `${n}. ${question.choices?.[n-1] || ''}` : '-';
    }
    if (question.type === 'multi-select') {
      return (Array.isArray(value)?value:[]).map(n => `${n}. ${question.choices?.[n-1] || ''}`).join(' / ') || '-';
    }
    return formatValue(value);
  }
  function removeWrong(questionId){const data=read();data.wrongNotes=data.wrongNotes.filter(x=>x.questionId!==questionId);write(data);return data;}
  function clearWrong(){const data=read();data.wrongNotes=[];write(data);return data;}
  window.CNFinalStorage = {KEY,typeLabels,empty,normalize,read,write,clear,rate,formatValue,formatQuestionAnswer,removeWrong,clearWrong};
})();
