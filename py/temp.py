from scipy.io.wavfile import write
import keyboard
import os 
from google.cloud import speech
from google.cloud import texttospeech_v1
from urllib import response
from unicodedata import name
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'key.json'
speech_client = speech.SpeechClient()
import pyaudio
import wave
from HKUSTAPI import USTChat
from playsound import playsound


def synthesize_text(text):
    """Synthesizes speech from the input string of text."""
    from google.cloud import texttospeech

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    # Note: the voice can also be specified by name.
    # Names of voices can be retrieved with client.list_voices().
    voice = texttospeech.VoiceSelectionParams(
        language_code="yue-HK",
        name="yue-HK-Standard-D",
        ssml_gender=texttospeech.SsmlVoiceGender.FEMALE,
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        request={"input": input_text, "voice": voice, "audio_config": audio_config}
    )

    # The response's audio_content is binary.
    with open("output.mp3", "wb") as out:
        out.write(response.audio_content)
    print('回應 Reply: ' + text)
    print("按A開始錄音 / 按E終結\nPress A to start recording / Press E to end session")

def Conversation(file_name):
    chunk = 1024  # Record in chunks of 1024 samples
    sample_format = pyaudio.paInt16  # 16 bits per sample
    channels = 1
    fs = 44100  # Record at 44100 samples per second
    seconds = 5
    filename = "output.wav"
    p = pyaudio.PyAudio()  # Create an interface to PortAudio

    print('錄音中 (預設10秒時間；若果沒有錄入內容，程式或會報錯)\nRecording (Default 10 seconds; if there is no voice input, the program may crash)')

    stream = p.open(format=sample_format,
                    channels=channels,
                    rate=fs,
                    frames_per_buffer=chunk,
                    input=True)

    frames = []  # Initialize array to store frames

    # Store data in chunks for x seconds
    for i in range(0, int(fs / chunk * seconds)):
        data = stream.read(chunk)
        frames.append(data)

    # Stop and close the stream 
    stream.stop_stream()
    stream.close()
    # Terminate the PortAudio interface
    p.terminate()

    print('完成錄音 Finished Recording')

    # Save the recorded data as a WAV file
    wf = wave.open(filename, 'wb')
    wf.setnchannels(channels)
    wf.setsampwidth(p.get_sample_size(sample_format))
    wf.setframerate(fs)
    wf.writeframes(b''.join(frames))
    wf.close()

    with open('output.wav', 'rb') as f2:
        if os.path.isfile('output.mp3') == True:
            os.remove('output.mp3')
        byte_data_wav = f2.read()
    audio_wav = speech.RecognitionAudio(content= byte_data_wav)

    config_mav = speech.RecognitionConfig(sample_rate_hertz = 44100,language_code = "yue-Hant-HK", audio_channel_count = 1)

    response_standard_wav =speech_client.recognize(
        config=config_mav,
        audio = audio_wav
    )

    # input = response_standard_wav.results[0].alternatives[0].transcript
    # print("你說 You said: " + input)
    # playsound('output.mp3')
    # os.remove('output.mp3')

output = "好啦，我要返屋企先，下次見到你再同你傾計，拜拜!"
synthesize_text(output)