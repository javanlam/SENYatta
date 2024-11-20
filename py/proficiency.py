import pyaudio
import wave
import os 
from google.cloud import speech
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'key.json'
speech_client = speech.SpeechClient()

def Proficiency():
    chunk = 1024  # Record in chunks of 1024 samples
    sample_format = pyaudio.paInt16  # 16 bits per sample
    channels = 1
    fs = 44100  # Record at 44100 samples per second
    seconds = 10
    filename = "output.wav"
    p = pyaudio.PyAudio()  # Create an interface to PortAudio

    print('Recording')

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

    print('Finished recording')

    # Save the recorded data as a WAV file
    wf = wave.open(filename, 'wb')
    wf.setnchannels(channels)
    wf.setsampwidth(p.get_sample_size(sample_format))
    wf.setframerate(fs)
    wf.writeframes(b''.join(frames))
    wf.close()

    with open('output.wav', 'rb') as f2:
        byte_data_wav = f2.read()
    audio_wav = speech.RecognitionAudio(content= byte_data_wav)

    config_mav = speech.RecognitionConfig(sample_rate_hertz = 44100,language_code = "yue-Hant-HK", audio_channel_count = 1)

    response_standard_wav =speech_client.recognize(
        config=config_mav,
        audio = audio_wav
    )

    output = response_standard_wav.results[0].alternatives[0].confidence
    print(response_standard_wav.results[0].alternatives)
    print(output)
Proficiency()