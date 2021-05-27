//subClass
//base class
var job = function () {
    this.pays = true;
};
//prototype method:
//job.prototype.print = function () {
//  console.log(this.pays ? "hire me" : "don't hire me")
//}
//sub class
var techJob = function (title, pays) {
    job.call(this);
    this.title = title;
    this.pays = pays;
}
techJob.prototype = Object.create(job.prototype);
techJob.prototype.constructor = techJob;


//techJob.prototype.print = function () {
//  console.log(this.pays ? this.title + 'job is great,please hire me' : "I would rather to apply another company");
//}
//master object
Object.prototype.print = function () {
    console.log(" I  am executing from the root")
}
//creating the objects
var softwareDeveloper = new techJob("React Developer", true);
var softwareDeveloper1 = new techJob("frontEndDeveloper", false);
//accessing
console.log(softwareDeveloper.print());
console.log(softwareDeveloper1.print());

