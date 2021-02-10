//function declaration named DNAtoRNA with
//parameter dna
function DNAtoRNA(dna) {
//return replace method with dna as property
//and regular expression t as the replacement
//character all wrapped in / /g for global
//and 'U' as the replacement of T
 return dna.replace(/T/g, 'U');
}