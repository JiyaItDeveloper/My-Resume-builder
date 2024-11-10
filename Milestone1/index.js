"use strict";
//contact section
let contact_section = document.getElementById('contact');
let con_btn = document.getElementById('con_btn');
con_btn?.addEventListener('click', () => {
    contact_section.classList.toggle('hide');
});
//education section
let education_section = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    education_section.classList.toggle('hide');
});
//skills section
let skills_section = document.getElementById('skills');
let skills_btn = document.getElementById('skills_btn');
skills_btn?.addEventListener('click', () => {
    skills_section.classList.toggle('hide');
});
//language section
let language_section = document.getElementById('language');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    language_section.classList.toggle('hide');
});
//refrence section
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//experince section
let experience_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    experience_section.classList.toggle('hide');
});
//print section
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
