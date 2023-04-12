export default class Client
{
  public downloadImage (image: string, name = 'image'): void {
    const link = document.createElement('a');

    link.href = URL.createObjectURL(new Blob([image], {
      type: 'text/plain; charset=UTF-8'
    }));

    link.download = `${name}.ppm`;
    link.click();

    URL.revokeObjectURL(link.href);
  }
}
