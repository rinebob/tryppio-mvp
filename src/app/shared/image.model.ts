export class Image {
  public id: number;
	public title: string;
	public description: string;
  public imagePath: string;
  public creator: string;
  public creatorId: string;
  public lat: string;
  public long: string;

	constructor(id: number, title: string, desc: string, imagePath: string, creator: string, creatorId: string, lat: string, long: string) {
		this.id = id;
		this.title = title;
		this.description = desc;
    this.imagePath = imagePath;
    this.creator = creator;
    this.creatorId = creatorId;
    this.lat = lat;
    this.long = long;
	}
}
