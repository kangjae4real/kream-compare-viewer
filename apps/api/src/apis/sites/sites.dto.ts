export class GetInfoRequest {}

export class Title {
  english: string;
  korean: string;
}

export class GetInfoResponse {
  title: Title;
  price: number;
  imageSrc: string;
}
