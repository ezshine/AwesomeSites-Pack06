import{am as r}from"./CmfzVdrr.js";const b=`
  query {
    allLabels {
      labels {
        ... on Label {
          key
          value
        }
      }
    }
  }
`,u=async e=>{var l,s;const n=r().public.sanityApi,{data:a}=await $fetch(n,{method:"POST",body:{query:b,variables:{lang:e}}});return((s=(l=a==null?void 0:a.allLabels[0])==null?void 0:l.labels)==null?void 0:s.reduce((t,{key:o,value:c})=>({...t,[o]:c}),{}))||{}},m=async e=>await u(e);export{m as default};
