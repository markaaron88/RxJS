import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";
//Observable -An array which gets build over time
//Create Subject and BehaviorSubject needs initial arg "First"
//Replay arg pass value(2)
//Most flexibity is Replay    30 events in 200 milisecond buffer
//Async subject no args
// let subject = new AsyncSubject();

//  Observable.create((observer: any) => {
//   observer.next("Hey guys!");
// })
// .map((val:any)=> val.toUpperCase())
// .subscribe((x:any)=> addItem(x));

// from([
//   { first: "Mark", last: "Warner", age: "34" },
//   { first: "Moses", last: "Warner", age: "34" },
//   { first: "Mike", last: "Warner", age: "34" },
// ])
//   .pluck("first")
//   .subscribe((x: any) => addItem(x));

let observable1 = Observable.create((data: any) => {
  var i = 1;
  setInterval(() => {
    data.next(i++);
  }, 1000);
});

let observerable2 = new Subject();
setTimeout(() => {
  observerable2.next("Hey!");
}, 3000);

let newObs = observable1.skipUntil(observerable2);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}

// subject.subscribe(
//   (data) => addItem("observer 1: " + data),
//   () => addItem("Observer 1 Completed")
// );

// let i = 1;
// let int = setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//   let observer2 = subject.subscribe((data) => addItem("Observer 2: " + data));
//   subject.complete();
// }, 500);

//Omot Values
// subject.next("The first thing has been sent");
// subject.next("Another thing has been sent");
// subject.next("...Observer 2 is about to subscribe");

// let observer2 = subject.subscribe((data) => addItem("Observer 2: " + data));

// subject.next("The second thing has been sent");
// subject.next("A third thing has been sent");

// observer2.unsubscribe();
// subject.next("A final thing has been sent");

// import { Observable } from "rxjs/Observable";
// import { fromEvent } from "rxjs/Observable/fromEvent";

// //Truly Hot observable
// let observable = fromEvent(document, "mousemove");

// setTimeout(() => {
//   let subscription = observable.subscribe((x: any) => addItem(x));
// }, 2000);
// import "rxjs/add/operator/share";
//To make observable warm import ^
//Create Observable and accepts a subscribe function
//cold observable producer is actovated once a subscription has been creatded.
// let observable = Observable.create((observer: any) => {
//   try {
//     //omit value
//     //To make observable HOT
//     observer.next("Hello");
//     observer.next("How are You?");
//     setInterval(() => {
//       observer.next("I am good");
//     }, 2000);
//   } catch {
//     observer.error(Error);
//   }
// }).share(); //add share for warm

// //Subscription
// //observer is a set of call backs that accept notifications that include Next, Error and Complete.
// let observer = observable.subscribe(
//   (x: any) => addItem(x),
//   (error: any) => addItem(error),
//   () => addItem("completed")
// );

// // let observer2 = observable.subscribe((x: any) => addItem(x));
// // observer.add(observer2);

// //cancel observer from any more omited values
// setTimeout(() => {
//   var observer2 = observable.subscribe((x: any) =>
//     addItem("Subscriber 2: " + x)
//   );
// }, 1000);
