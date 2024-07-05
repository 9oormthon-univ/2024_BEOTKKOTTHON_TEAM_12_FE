import { postData } from 'service/service';

const POST = {
  upload(sendData: FormData): Promise<string> {
    return postData('/upload', sendData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

const imageService = {
  POST,
};

export default imageService;
