/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

class Page<T> extends Component<{title: T}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};