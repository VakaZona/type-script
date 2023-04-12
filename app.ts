const skills: string[] = ['Dev', 'Devops', 'QA'];

for (const skill of skills) { 
	console.log(skill.toUpperCase());
}

const res1 = skills
	.filter((s: string) => s !== 'QA');

const res2 = skills.map(s => {
	return s + '! '
})

const res3 = skills.reduce((a, b) => a + b);

console.log(res1, res2, res3);