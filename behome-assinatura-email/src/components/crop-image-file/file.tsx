import { useCallback, useEffect, useRef, useState } from "react";

import Cropper from "react-easy-crop";
import { getOrientation } from "get-orientation";

import styles from "./file.module.scss";

// Helpers
import { getCroppedImg, getRotatedImage, readFile } from "./helpers";

interface IFile {
  name: string;
  id: string;
  arquivo?: FileList;
}

export default function CropImageFile({ name, id, arquivo }: IFile) {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    x: 0,
    y: 0,
    width: 1,
    height: 1,
  });
  const [croppedImage, setCroppedImage] = useState(null);

  const ORIENTATION_TO_ANGLE = {
    "3": 180,
    "6": 90,
    "8": -90,
  };

  // Para renderizar inicialmente
  useEffect(() => {
    if (arquivo && arquivo.length > 0) {
      inputRef.current.files = arquivo;
    }

    if (imageSrc) {
      buttonRef.current.click();
    } else {
      if (typeof window !== "undefined") {
        const storage: DadosAssinatura = JSON.parse(localStorage.getItem("dados"));

        if (storage) {
          const get_img = storage.foto;

          if (get_img) {
            setImageSrc(get_img);
          }
        }
      }
    }
  }, [crop]);

  // Quando cropar
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);

    buttonRef.current.click();
  }, []);

  // Quando fizer upload
  const onFileChange = async (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      let imageDataUrl = await readFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }

      setImageSrc(imageDataUrl);
    }
  };

  // Mostrar imagem cropada
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  return (
    <>
      {imageSrc && <div className={styles.inputFile__margin}></div>}

      <div className={styles.inputFile}>
        {/*Croped image */}
        {imageSrc && (
          <Cropper
            image={imageSrc}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={4 / 4}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        )}
        {/* Croped image */}

        {/* Controles */}
        {imageSrc && (
          <div className={styles.inputFile__controls}>
            <button
              type="button"
              onClick={() => {
                zoom >= 1 && zoom <= 3 ? setZoom(zoom + 1) : null;
              }}>
              +
            </button>
            <button
              type="button"
              onClick={() => {
                zoom > 1 ? setZoom(zoom - 1) : null;
              }}>
              -
            </button>
            <button type="button" onClick={() => setRotation(rotation + 15)}>
              ⟳
            </button>
            <button type="button" onClick={() => setRotation(rotation - 15)}>
              ⟲
            </button>
          </div>
        )}
        {/* Controles */}

        {/* Conteudo */}
        <div className={styles.inputFile__content} style={{ display: imageSrc ? "none" : "flex" }}>
          <img width={69} height={69} src={"/images/file.svg"} />
          <button
            type="button"
            onClick={() => {
              inputRef.current.click();
            }}>
            <img width={20} height={20} src={"/images/icon-file.svg"} />
            Upload
          </button>
        </div>

        <input
          type="file"
          name={name}
          id={id}
          ref={inputRef}
          onChange={(e) => {
            e.preventDefault();
            onFileChange(e);
          }}
        />
      </div>

      {imageSrc && (
        <a href={null} onClick={() => inputRef.current.click()} className={styles.inputFile__link}>
          Usar outra foto
        </a>
      )}
      {/* Conteudo */}

      {/* Itens ocultos para aparecer na assinatura */}
      <button
        ref={buttonRef}
        onClick={showCroppedImage}
        style={{ position: "absolute", opacity: "0", zIndex: -9999 }}
        type="button"></button>
      {croppedImage && (
        <img
          src={croppedImage}
          alt=""
          id="croppedImage"
          style={{ position: "absolute", opacity: "0", zIndex: -9999 }}
        />
      )}
      {/* Itens ocultos para aparecer na assinatura */}
    </>
  );
}
